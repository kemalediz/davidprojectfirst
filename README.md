# Simple Airtable Auth Demo

Minimal single-page front end with a Python backend that proxies to Airtable for user sign-up and sign-in. Users are stored in the `User` table with `username` and `password` columns.

## Setup

1. Create a personal access token in Airtable with access to your base.
2. Set environment variables (you can export them in your shell):
   ```bash
   export AIRTABLE_PAT=pat_your_token_here
   export AIRTABLE_BASE_ID=appYourBaseId
   export AIRTABLE_TABLE_NAME=User   # optional if your table is named "User"
   ```

## Run the app

```bash
python3 backend.py
```

Then open http://localhost:8000 to use the UI.

## Notes

- The backend uses only the Python standard library; no extra packages are required.
- Passwords are stored as plain text in Airtable to mirror the requested schema; do not use this approach for production systems. Add hashing/validation before any real use.
