import datetime
from uuid import uuid4


def create_uuid() -> str:
    return uuid4().hex


def get_date_time_jst() -> str:
    time_delta = datetime.timedelta(hours=9)
    JST = datetime.timezone(time_delta, 'JST')
    time_now = datetime.datetime.now(JST)
    return time_now.strftime('%Y-%m-%d %H:%M')
