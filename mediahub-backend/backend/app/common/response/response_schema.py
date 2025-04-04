# -*- coding: utf-8 -*-
from datetime import datetime
from typing import Any

from pydantic import BaseModel, ConfigDict

from backend.app.common.response.response_code import CustomResponse, CustomResponseCode

class ResponseModel(BaseModel):

    code: int = CustomResponseCode.HTTP_200.code
    msg: str = CustomResponseCode.HTTP_200.msg
    data: Any | None = None

class ResponseBase:
    
    @staticmethod
    def __response(*, res: CustomResponseCode | CustomResponse = None, data: Any | None = None) -> ResponseModel:
        return ResponseModel(code=res.code, msg=res.msg, data=data)

    def success(
            self,
            *,
            res: CustomResponseCode | CustomResponse = CustomResponseCode.HTTP_200,
            data: Any | None = None,
    ) -> ResponseModel:
        return  self.__response(res=res, data=data)

    def fail(
            self,
            *,
            res: CustomResponseCode | CustomResponse = CustomResponseCode.HTTP_400,
            data: Any = None,
    ) -> ResponseModel:
        return  self.__response(res=res, data=data)


response_base = ResponseBase()