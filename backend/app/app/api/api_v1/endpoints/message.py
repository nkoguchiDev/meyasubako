from typing import Any

from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext

from app import schemas

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_secret(secret: str) -> bool:
    if pwd_context.hash(secret) == "":
        return True

    return False


@router.post("", status_code=201, response_model=schemas.MessageResponse)
def post_message(secret: str,
                 isPublish: bool,
                 message_in: schemas.MessageCreate) -> Any:

    if not verify_secret(secret):
        raise HTTPException(
            status_code=401,
            detail="unauthorized.",
        )

    if isPublish:
        print(isPublish)

    return {
        "content": message_in.content,
        "isPublish": isPublish
    }
