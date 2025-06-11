# IncognitoGPT

## Overview / Description  
IncognitoGPT is an AI chat platform that encrypts all conversation data at rest, stores history only on the user’s device, and ensures zero cloud logging, combining GPT-powered chat with Signal-level privacy.

## Features  
- Chat by using local LLMs like Ollama or llama.cpp  
- AES-256 encryption of all stored messages  
- Conversation history saved locally in encrypted SQLite database  
- Clean React UI with Markdown support, dark mode, and copy-to-clipboard  
- No cloud syncing or tracking; all data remains on user device  

## Architecture  
Backend: FastAPI service handling chat requests, encryption, and local SQLite storage  
Encryption: AES encryption/decryption of user and AI messages using Python Cryptography library  
LLM API: Supports configurable local LLM backends (Ollama, llama.cpp)  
Frontend: React app with Zustand state management, Tailwind CSS for styling, and Axios for API calls  

## Tech Stack  
Backend: Python, FastAPI, SQLite, Cryptography (AES)  
Frontend: React, Tailwind CSS, Zustand  
LLM API: Local LLM (Ollama/llama.cpp)  
