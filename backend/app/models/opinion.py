from mongoengine import Document
from mongoengine.fields import StringField, ReferenceField

from app.models import Subject


class Opinion(Document):
    uuid = StringField(unique=True, required=True)
    content = StringField(required=True)
    date = StringField(required=True)
    opinion = ReferenceField(Subject)

    meta = {
        'db_alias': 'meyasubako',
        'collection': 'opinion',
        'max_documents': 1000,
        'max_size': 2000000
    }
