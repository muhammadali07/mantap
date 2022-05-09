from requests import request
from fastapi import APIRouter, status, Response, Depends
from app.api.utils import (
    handle_error_code
)

#model
from app.schema import (
    RequestUser
)

#crud
from app.crud import (
    create_account_user
)

router = APIRouter()

@router.post(
    '/create-user-account',
    status_code = status.HTTP_201_CREATED,
    summary = 'Informasi Akun',
)
async def create_user_accunt(
    response : Response,
    request : RequestUser,
):
    out_response = await create_account_user(request)
    handle_error_code(response, out_response)
    return out_response