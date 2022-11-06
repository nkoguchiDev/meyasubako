# from typing import Optional

from pydantic import BaseModel


# Shared properties
class OpinionBase(BaseModel):
    content: str


class OpinionCreate(OpinionBase):
    uuid: str
    date: bool


class OpinionResponse(OpinionBase):
    uuid: str
    date: bool
