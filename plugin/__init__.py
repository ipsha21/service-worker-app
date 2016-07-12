from pyramid.events import NewRequest
from kinto.core.events import AfterResourceChanged
from pywebpush import WebPusher

def on_new_request(event):
    cache = event.request.registry.cache
    storage = event.request.registry.storage

    subsID = req.param('subsID')
    pushURL = req.param('pushURL')
    trigger = req.param('trigger')

    value = [pushURL, trigger]
    cache.set(subsID, value)

    # Not sure about this
    entry = storage.create(collection_id='subscriptioninfo',
                           record=value)

config.add_subscriber(on_new_request, NewRequest)



def on_resource_changed(event)
    action = payload['action']
    resource_name = payload['resource_name']
    notif_subs = getSubscription(action)
    for subs in notif_subs:
        # I don't know how we extract the pushURL, is it like this?
        subscription_info = subs.value.pushURL
        message = 'Notification!'
        WebPusher(subscription_info).send(data=message, ttl=15)

config.add_subscriber(on_resource_changed, AfterResourceChanged)



def getSubscription(action):
    return cache.get_all(collection_id='subscriptioninfo', trigger='action')
