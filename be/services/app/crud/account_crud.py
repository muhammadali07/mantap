from datetime import datetime
import gevent
import uuid
from fastapi.logger import logger
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.model import (
    RequestUser
)

from app.api.utils import (
    ResponseOutCustom
)

from app.schema import (
    RequestUser
)

async def create_account_user(request:RequestUser, db_session:AsyncSession) -> ResponseOutCustom:
    async with db_session as session:
        try:
            new_user = RequestUser(
                db_id = uuid.uuid4(),
                username = request.username,
                password = request.password,
                role = request.role
            )
            session.add(new_user)
            await session.refresh(new_user)
            return ResponseOutCustom(message_id="00", status="Success", list_data=new_user)
        except gevent.Timeout:
            await session.invalidate()
            return ResponseOutCustom(
                message_id="02",
                status="Failed, DB transaction was timed out...",
                list_data=None,
            )

        except SQLAlchemyError as e:
            logger.error(e)
            await session.rollback()
            return ResponseOutCustom(
                message_id="02",
                status="Failed, something wrong rollback DB transaction...",
                list_data=None,
            )
