from app import crud
from app.tests import utils


def test_create_subject() -> None:
    subject = crud.subject.create(name=utils.random_lower_string())
    content = utils.random_lower_string()
    opinion = crud.opinion.create(
        subject=subject,
        content=content)
    assert hasattr(opinion, "uuid")
    assert hasattr(opinion, "content")
    assert opinion.content == content


def test_get_subject() -> None:
    subject = crud.subject.create(name=utils.random_lower_string())
    content = utils.random_lower_string()
    create_opinion = crud.opinion.create(
        subject=subject,
        content=content)
    get_opinion = crud.opinion.get(
        uuid=create_opinion.uuid)

    assert create_opinion.content == get_opinion.content
    assert create_opinion.date == get_opinion.date


def test_list_subject() -> None:
    subject = crud.subject.create(name=utils.random_lower_string())
    opinion_01 = crud.opinion.create(
        subject=subject,
        content=utils.random_lower_string())
    opinion_02 = crud.opinion.create(
        subject=subject,
        content=utils.random_lower_string())

    opinion_list = crud.opinion.get_list(subject=subject)

    assert opinion_01 in opinion_list
    assert opinion_02 in opinion_list
