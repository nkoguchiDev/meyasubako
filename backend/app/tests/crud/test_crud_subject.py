from app import crud
from app.tests import utils


def test_create_subject() -> None:
    subject_name = utils.random_lower_string()
    subject = crud.subject.create(name=subject_name)

    assert hasattr(subject, "uuid")
    assert hasattr(subject, "name")
    assert hasattr(subject, "classification")
    assert subject.name == subject_name


def test_get_subject() -> None:
    subject_name = utils.random_lower_string()
    create_subject = crud.subject.create(name=subject_name)
    get_subject = crud.subject.get(uuid=create_subject.uuid)

    assert create_subject == get_subject
    assert create_subject.uuid == get_subject.uuid
    assert create_subject.name == get_subject.name
    assert create_subject.date == get_subject.date


def test_list_subject() -> None:
    subject_01 = crud.subject.create(name=utils.random_lower_string())
    subject_02 = crud.subject.create(name=utils.random_lower_string())

    subject_list = crud.subject.get_list()

    assert subject_01 in subject_list
    assert subject_02 in subject_list
