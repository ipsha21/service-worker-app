import colander
from kinto.core import resource

class PushURL(colander.MappingSchema):
    endpoint = colander.SchemaNode(colander.String(), validator = colander.url)
    key = colander.SchemaNode(colander.String())

class Data(colander.MappingSchema):
    pushURL = PushURL()
    trigger = colander.SchemaNode(colander.String())

class subscriptionSchema(colander.MappingSchema):
    data = Data()

@resource.register(name='subscriptioninfo')
class Subscription(resource.UserResource):
    mapping = subscriptionSchema()
