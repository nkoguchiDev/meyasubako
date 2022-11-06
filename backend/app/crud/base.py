from typing import Generic, Optional, Type, TypeVar  # noqa


ModelType = TypeVar("ModelType", bound=object)


class CRUDBase(Generic[ModelType]):
    def __init__(self, model: Type[ModelType]):
        """
        CRUD object with default methods to Create, Read, Update, Delete (CRUD).
        **Parameters**
        * `model`: A mongoengine model class
        """
        self.model = model

    def get(self, uuid: str) -> Optional[ModelType]:
        return self.model.objects(uuid=uuid).first()

    def get_list(self) -> Optional[ModelType]:
        return self.model.objects()

    def create(self) -> ModelType:
        raise NotImplementedError()
