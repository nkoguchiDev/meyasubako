from fastapi import APIRouter

from app.api.api_v1.endpoints import message

api_router = APIRouter()
api_router.include_router(message.router, prefix="/messages", tags=["message"])
