import json

from typing import Any, List
from fastapi import APIRouter

from app import schemas, crud

router = APIRouter()


@router.get("", status_code=200, response_model=List[schemas.SubjectResponse])
def get_subject_list() -> Any:

    subject_list = crud.subject.get_list()
    return json.loads(subject_list.to_json())


@router.post("", status_code=201, response_model=schemas.SubjectResponse)
def post_subject(subject_in: schemas.SubjectBase) -> Any:

    subject = crud.subject.create(
        name=subject_in.name,
        classification=subject_in.classification)

    return json.loads(subject.to_json())


@router.get("/{subject_id}/opinions", status_code=200,
            response_model=List[schemas.OpinionResponse])
def get_opinion_list(subject_id: str) -> Any:

    subject = crud.subject.get(uuid=subject_id)
    opinion_list = crud.opinion.get_list(subject=subject)
    return json.loads(opinion_list.to_json())


@router.post("/{subject_id}/opinions", status_code=201,
             response_model=schemas.OpinionResponse)
def post_opinion(subject_id: str, opinion_in: schemas.OpinionBase) -> Any:

    subject = crud.subject.get(uuid=subject_id)
    opinion = crud.opinion.create(subject=subject,
                                  content=opinion_in.content)
    return json.loads(opinion.to_json())
