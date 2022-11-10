from app.models import Opinion, Like
from app.utils import create_uuid, get_date_time_jst
from app.crud.base import CRUDBase


class CRUDLike(CRUDBase[Like]):
    def count(
            self,
            opinion: Opinion) -> int:

        return Like.objects(opinion=opinion).count()

    def create(
            self,
            opinion: Opinion) -> Like:

        uuid = create_uuid()
        like_obj = Like(
            uuid=uuid,
            date=get_date_time_jst(),
            opinion=opinion
        )
        like_obj.save()
        return Like.objects(uuid=uuid).first()


like = CRUDLike(Like)
