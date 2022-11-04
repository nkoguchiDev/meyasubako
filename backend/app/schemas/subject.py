# from typing import Optional

from pydantic import BaseModel


# Shared properties
class SubjectBase(BaseModel):
    name: str


class SubjectCreate(SubjectBase):
    uuid: str
    date: bool


class SubjectResponse(SubjectBase):
    uuid: str
    date: bool
