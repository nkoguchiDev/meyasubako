import json

from typing import Any, List
from fastapi import APIRouter

from app import schemas, crud

router = APIRouter()


@router.get("", status_code=200, response_model=List[schemas.SubjectResponse])
def get_message_list() -> Any:

    subject_list = crud.subject.get()
    return json.loads(subject_list.to_json())


@router.post("", status_code=201, response_model=schemas.SubjectResponse)
def post_subject(subject_in: schemas.SubjectBase) -> Any:

    subject = crud.subject.create(name=subject_in.name)

    return json.loads(subject.to_json())
