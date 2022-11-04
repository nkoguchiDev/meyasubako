from mongoengine import Document
from mongoengine.fields import StringField


class Subject(Document):
    uuid = StringField(unique=True, required=True)
    _type = StringField(default="subject")
    name = StringField(required=True)
    date = StringField(required=True)

    meta = {
        'db_alias': 'mongodb',
        'collection': 'subject',
        'max_documents': 1000,
        'max_size': 2000000
    }
