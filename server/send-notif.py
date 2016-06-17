from __future__ import print_function

import json
import requests
import sys

from pywebpush import WebPusher
from six.moves import input

number_of_args = len(sys.argv)

if number_of_args < 2:
    print("USAGE: send-notif.py SUBSCRIPTION-JSON-CONFIG [MESSAGE]",
          file=sys.stderr)
    sys.exit(1)

if number_of_args > 2:
    message = sys.argv[2]
else:
    message = input()

print("Sending: %s" % message)

try:
    subscription_info = json.loads(sys.argv[1])
except ValueError as e:
    print("SUBSCRIPTION-JSON-CONFIG should be a valid JSON:\n%s" % e,
          file=sys.stderr)
    sys.exit(2)

WebPusher(subscription_info).send(data=message, ttl=15)
print("Message sent.")
