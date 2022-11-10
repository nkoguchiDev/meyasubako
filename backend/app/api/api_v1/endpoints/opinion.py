import json

from typing import Any, List
from fastapi import APIRouter

from app import schemas, crud

router = APIRouter()


@router.get("/{opinion_id}", status_code=200,
            response_model=schemas.OpinionResponse)
def get_opinion(opinion_id: str) -> Any:

    opinion = crud.opinion.get(uuid=opinion_id)
    return json.loads(opinion.to_json())


@router.get("/{opinion_id}/likes", status_code=200,
            response_model=int)
def get_like_count(opinion_id: str) -> Any:

    opinion = crud.opinion.get(uuid=opinion_id)
    like_count = crud.like.count(opinion=opinion)
    return like_count


@router.post("/{opinion_id}/likes", status_code=201,
             response_model=int)
def post_like(opinion_id: str) -> Any:

    opinion = crud.opinion.get(uuid=opinion_id)

    crud.like.create(opinion=opinion)
    like_count = crud.like.count(opinion=opinion)
    return like_count
