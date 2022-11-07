from mongoengine import Document
from mongoengine.fields import StringField, ReferenceField

from app.models import Opinion


class Like(Document):
    uuid = StringField(unique=True, required=True)
    opinion = ReferenceField(Opinion)

    meta = {
        'db_alias': 'meyasubako',
        'collection': 'like',
        'max_documents': 1000,
        'max_size': 2000000
    }
