simple-worker-app
=================

The aim of this project is to start hacking on WebPush and Kinto.

- Understand how you can send a notification with an encrypted
  payload.
- Understand how you can send the notification payload to be displayed
  on the page.

- The **client** directory contains the code that is to be run on the
  Browser.
- The **server** directory contains the code that is use to send
  notification using the Push endpoint.


Live Blogging app
=================

The live blogging app is an experiment of a stream of messages
displayed to the user through the Push Notification channel.

`Open the app <https://ipsha21.github.io/service-worker-app/>`_ and
send notifications to the endpoint given in the JavaScript Console::

  cd server
  make install
  .venv/bin/python send-notif.py '{"endpoint": "", "keys": {}}' "Your message"

New messages will be added to your page through the notification channel.
