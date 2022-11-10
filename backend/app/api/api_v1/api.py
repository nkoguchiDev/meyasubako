from fastapi import APIRouter

from app.api.api_v1.endpoints import subject, opinion

api_router = APIRouter()
api_router.include_router(subject.router, prefix="/subjects", tags=["subject"])
api_router.include_router(opinion.router, prefix="/opinions", tags=["opinion"])
