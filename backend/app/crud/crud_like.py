from app.models import Opinion, Like
from app.utils import create_uuid
from app.crud.base import CRUDBase


class CRUDLike(CRUDBase[Like]):

    def create(
            self,
            opinion: Opinion) -> Like:

        uuid = create_uuid()
        like_obj = Like(
            uuid=uuid,
            opinion=opinion
        )
        like_obj.save()
        return Like.objects(uuid=uuid).first()


like = CRUDLike(Like)
