from fastapi import FastAPI, Form
from encryptor import encrypt, decrypt
from chat_api import ask_gpt
import sqlite3
import os

app = FastAPI()
conn = sqlite3.connect("db.sqlite3", check_same_thread=False)
conn.execute("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, user TEXT, ai TEXT)")

@app.post("/chat/")
def chat(prompt: str = Form(...)):
    ai_response = ask_gpt(prompt)
    enc_user = encrypt(prompt)
    enc_ai = encrypt(ai_response)
    conn.execute("INSERT INTO messages (user, ai) VALUES (?, ?)", (enc_user, enc_ai))
    conn.commit()
    return {"response": ai_response}

@app.get("/history/")
def history():
    rows = conn.execute("SELECT * FROM messages ORDER BY id DESC LIMIT 10").fetchall()
    return [{"user": decrypt(row[1]), "ai": decrypt(row[2])} for row in rows]
