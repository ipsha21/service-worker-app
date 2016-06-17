import requests
import sys

if len(sys.argv) < 2:
    print("USAGE: send-notif.py ENDPOINT")
    sys.exit(1);

endpoint = sys.argv[1];
requests.post(endpoint);
