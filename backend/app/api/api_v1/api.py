from fastapi import APIRouter

from app.api.api_v1.endpoints import subject

api_router = APIRouter()
api_router.include_router(subject.router, prefix="/subject", tags=["subject"])
