from uuid import uuid4
import datetime

from app.crud.base import CRUDBase
from app.models import Subject
from app.schemas import SubjectCreate


class CRUDSubject(CRUDBase[Subject, SubjectCreate, SubjectCreate]):

    def get(self, uuid) -> Subject:
        return Subject.objects(uuid=uuid).first()

    def create(
            self,
            obj_in: SubjectCreate) -> Subject:

        t_delta = datetime.timedelta(hours=9)
        JST = datetime.timezone(t_delta, 'JST')
        now = datetime.datetime.now(JST)

        uuid = uuid4().hex
        db_obj = Subject(
            uuid=uuid,
            name=obj_in.name,
            date=now.strftime('%Y-%m-%d %H:%M')
        )
        db_obj.save()
        return Subject.objects(uuid=uuid).first()


Subject = CRUDSubject(Subject)
