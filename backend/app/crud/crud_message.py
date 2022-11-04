from uuid import uuid4
import datetime

from app.crud.base import CRUDBase
from app.models import Message
from app.schemas import MessageCreate


class CRUDMessage(CRUDBase[Message, MessageCreate, MessageCreate]):

    def get(self) -> Message:
        return Message.objects()

    def create(
            self,
            obj_in: MessageCreate) -> Message:

        t_delta = datetime.timedelta(hours=9)
        JST = datetime.timezone(t_delta, 'JST')
        now = datetime.datetime.now(JST)

        uuid = uuid4().hex
        db_obj = Message(
            uuid=uuid,
            content=obj_in.content,
            date=now.strftime('%Y-%m-%d %H:%M')
        )
        db_obj.save()
        return Message.objects(uuid=uuid).first()


message = CRUDMessage(Message)
