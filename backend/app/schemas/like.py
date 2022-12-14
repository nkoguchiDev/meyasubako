# from typing import Optional

from pydantic import BaseModel


# Shared properties
class LikeBase(BaseModel):
    pass


class LikeCreate(LikeBase):
    uuid: str
    count: int


class LikeResponse(LikeBase):
    uuid: str
    count: int
