from pydantic import BaseModel
from typing import List, Optional

class RequestUser(BaseModel):
    username : Optional(str)
    password : Optional(str)
    role : Optional(str)