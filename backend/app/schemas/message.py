# from typing import Optional

from pydantic import BaseModel


# Shared properties
class MessageBase(BaseModel):
    content: str


class MessageCreate(MessageBase):
    isPublish: bool


class MessageResponse(MessageBase):
    isPublish: bool
