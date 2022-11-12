from app.models import Subject
from app.utils import create_uuid, get_date_time_jst
from app.crud.base import CRUDBase


class CRUDSubject(CRUDBase[Subject]):

    def create(
            self,
            name: str,
            classification: str) -> Subject:
        uuid = create_uuid()
        subject_obj = Subject(
            uuid=uuid,
            name=name,
            date=get_date_time_jst(),
            classification=classification
        )
        subject_obj.save()
        return Subject.objects(uuid=uuid).first()


subject = CRUDSubject(Subject)
