# from typing import Optional

from pydantic import BaseModel


# Shared properties
class MessageBase(BaseModel):
    content: str


class MessageResponse(MessageBase):
    isPublish: bool
