from mongoengine import Document
from mongoengine.fields import StringField


class Message(Document):
    uuid = StringField(unique=True, required=True)
    _type = StringField(default="message")
    content = StringField(required=True)
    date = StringField(required=True)

    meta = {
        'db_alias': 'mongodb',
        'collection': 'message',
        'max_documents': 1000,
        'max_size': 2000000
    }
