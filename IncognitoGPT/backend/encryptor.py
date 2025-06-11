from cryptography.fernet import Fernet
import base64, os

key = os.getenv("ENCRYPTION_KEY").encode()
fernet = Fernet(base64.urlsafe_b64encode(key))

def encrypt(text: str) -> str:
    return fernet.encrypt(text.encode()).decode()

def decrypt(token: str) -> str:
    return fernet.decrypt(token.encode()).decode()
