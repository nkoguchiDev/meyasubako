# from typing import Optional

from pydantic import BaseModel


# Shared properties
class LikeBase(BaseModel):
    pass


class LikeCreate(LikeBase):
    uuid: str


class LikeResponse(LikeBase):
    uuid: str
