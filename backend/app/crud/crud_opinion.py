from app.models import Opinion, Subject
from app.utils import create_uuid, get_date_time_jst
from app.crud.base import CRUDBase


class CRUDOpinion(CRUDBase[Opinion]):

    def create(
            self,
            subject: Subject,
            content: str) -> Opinion:

        uuid = create_uuid()
        opinion_obj = Opinion(
            uuid=uuid,
            content=content,
            date=get_date_time_jst(),
            subject=subject
        )
        opinion_obj.save()
        return Opinion.objects(uuid=uuid).first()


message = CRUDOpinion(Opinion)
