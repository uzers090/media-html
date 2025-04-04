import logging
from typing import Optional
class Exceed_token_Exception(Exception):

    MAX_TOKEN:int
    DEFAULT_MESSAGE:str="Exceeded Max token size"
    def __init__(self , message:Optional[str]) -> None:
        if not message:
            message = self.DEFAULT_MESSAGE
        logging.error(message)
        super().__init__(message)
       
