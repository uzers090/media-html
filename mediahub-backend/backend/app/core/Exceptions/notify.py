from backend.app.utils.mail_handler.mail import send_system_error_message
class NotifyException(Exception):
    def __init__(self, *args: object) -> None:
        super().__init__(*args)
        send_system_error_message(str(args))