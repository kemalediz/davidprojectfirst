import json
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

# Configuration pulled from environment variables.
AIRTABLE_PAT = "patxfJRcv1wPdrbKo.f7b2f377919b57588a09affa5cb416606b6121f085886653985404d10743ec91"
AIRTABLE_BASE_ID = "appGzfaR5z7IVR9x7"
AIRTABLE_TABLE_NAME = "User"

BASE_DIR = Path(__file__).parent
PUBLIC_DIR = BASE_DIR / "public"


class AppHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Serve static assets from the public directory.
        super().__init__(*args, directory=str(PUBLIC_DIR), **kwargs)

    def do_POST(self):
        if self.path == "/api/signup":
            self.handle_signup()
        elif self.path == "/api/signin":
            self.handle_signin()
        else:
            self.send_error(404, "Not Found")

    def read_json_body(self):
        try:
            content_length = int(self.headers.get("Content-Length", 0))
        except ValueError:
            content_length = 0
        data = self.rfile.read(content_length) if content_length else b""
        try:
            return json.loads(data.decode("utf-8"))
        except json.JSONDecodeError:
            return None

    def send_json(self, status_code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_signup(self):
        if not self._check_env():
            return
        data = self.read_json_body()
        if not data or "username" not in data or "password" not in data:
            self.send_json(400, {"error": "username and password are required"})
            return

        username = data["username"].strip()
        password = data["password"]

        if not username:
            self.send_json(400, {"error": "username cannot be empty"})
            return

        existing = fetch_user(username)
        if isinstance(existing, dict) and existing.get("records"):
            self.send_json(409, {"error": "username already exists"})
            return

        create_result = create_user(username, password)
        if isinstance(create_result, dict) and create_result.get("records"):
            self.send_json(201, {"message": "User created"})
        else:
            self.send_json(500, {"error": "Failed to create user"})

    def handle_signin(self):
        if not self._check_env():
            return
        data = self.read_json_body()
        if not data or "username" not in data or "password" not in data:
            self.send_json(400, {"error": "username and password are required"})
            return

        username = data["username"].strip()
        password = data["password"]

        if not username:
            self.send_json(400, {"error": "username cannot be empty"})
            return

        existing = fetch_user(username)
        if not existing or not existing.get("records"):
            self.send_json(401, {"error": "Invalid username or password"})
            return

        record = existing["records"][0]
        fields = record.get("fields", {})
        if fields.get("password") == password:
            self.send_json(200, {"message": "Login successful"})
        else:
            self.send_json(401, {"error": "Invalid username or password"})

    def _check_env(self):
        missing = []
        if not AIRTABLE_PAT:
            missing.append("AIRTABLE_PAT")
        if not AIRTABLE_BASE_ID:
            missing.append("AIRTABLE_BASE_ID")
        if missing:
            self.send_json(500, {"error": f"Missing environment variables: {', '.join(missing)}"})
            return False
        return True


def airtable_request(method, path_suffix="", payload=None):
    if not AIRTABLE_PAT or not AIRTABLE_BASE_ID:
        return None

    base_url = f"https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/{quote(AIRTABLE_TABLE_NAME)}"
    if path_suffix.startswith("?") or not path_suffix:
        url = f"{base_url}{path_suffix}"
    else:
        url = f"{base_url}/{path_suffix}"
    headers = {
        "Authorization": f"Bearer {AIRTABLE_PAT}",
        "Content-Type": "application/json",
    }

    data = json.dumps(payload).encode("utf-8") if payload is not None else None
    req = Request(url, data=data, headers=headers, method=method)
    try:
        with urlopen(req) as resp:
            body = resp.read().decode("utf-8")
            return json.loads(body)
    except Exception as exc:
        print(f"Error contacting Airtable: {exc}")
        return None


def fetch_user(username):
    formula = f"{{username}}='{username}'"
    encoded_formula = quote(formula, safe="")
    path = f"?filterByFormula={encoded_formula}&maxRecords=1"
    return airtable_request("GET", path)


def create_user(username, password):
    payload = {
        "records": [
            {
                "fields": {
                    "username": username,
                    "password": password,
                }
            }
        ]
    }
    return airtable_request("POST", "", payload=payload)


def run_server(port=8000):
    server = HTTPServer(("0.0.0.0", port), AppHandler)
    print(f"Serving on http://localhost:{port}")
    server.serve_forever()


if __name__ == "__main__":
    run_server()
