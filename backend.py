"""Tiny static file server for the Marvelpedia wiki.

Serves the contents of the ``public/`` directory. No external services,
no database, no API keys — everything is a static front end.

Usage:
    python3 backend.py [port]   # defaults to port 8000
Then open http://localhost:8000
"""

import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

BASE_DIR = Path(__file__).parent
PUBLIC_DIR = BASE_DIR / "public"


class StaticHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PUBLIC_DIR), **kwargs)

    # Quieter, single-line request logging.
    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


def run_server(port=8000):
    server = HTTPServer(("0.0.0.0", port), StaticHandler)
    print(f"Marvelpedia serving at http://localhost:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
        server.server_close()


if __name__ == "__main__":
    chosen_port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    run_server(chosen_port)
