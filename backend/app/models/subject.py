from mongoengine import Document
from mongoengine.fields import StringField


class Subject(Document):
    uuid = StringField(unique=True, required=True)
    name = StringField(required=True)
    date = StringField(required=True)

    meta = {
        'db_alias': 'meyasubako',
        'collection': 'subject',
        'max_documents': 1000,
        'max_size': 2000000
    }
