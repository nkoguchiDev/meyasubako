from fastapi.testclient import TestClient

from app.main import app
from app.core.config import settings
from app.tests import utils

client = TestClient(app)
api_base_path = settings.API_V1_STR
post_headers = {"Content-Type": "application/json"}


def test_get_subjects_response_is_list():
    response = client.get(f"{api_base_path}/subjects")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_create_subjects_response():
    subject_name = utils.random_lower_string()
    subject_classification = utils.random_lower_string()
    create_response = client.post(
        f"{api_base_path}/subjects",
        headers=post_headers,
        json={
            "name": subject_name,
            "classification": subject_classification
        },
    )
    assert create_response.status_code == 201

    get_response = client.get(f"{api_base_path}/subjects/{create_response.json().get("uuid")}")
    assert get_response.json().get("name", None) == subject_name
    assert get_response.json().get("classification", None) == subject_classification
