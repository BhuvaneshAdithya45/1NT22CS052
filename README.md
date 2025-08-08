# URL Shortener – Affordmed Frontend Assessment

This is a Full Stack URL Shortener application built for the Affordmed Frontend Track Assessment (2025). It includes:

-  React + Material UI frontend to shorten URLs
- Logging middleware to capture and log user activity
-  Secure POST requests
-  Clean UI + Error handling

---

##  Project Structure

1NT22CS052/
├── frontend/ # React-based URL shortener app
├── loggingMiddleware/ # Express logging middleware server
├── .gitignore # Ignore sensitive files
├── README.md # Project overview
├── SystemDesign.pdf # Design explanation document

## How to Run

### 1. Logging Middleware (port 4000)
```bash
cd loggingMiddleware
npm install
node index.js


cd frontend
npm install
npm run dev

Features
Shortens any valid URL using CleanURI  API

Logs all user actions via a centralized logging middleware

Clean and responsive UI using Material UI

Error messages for invalid or failed attempts


Tech Stack
Frontend: React + Material UI + Axios

Backend Logging: Node.js + Express + Morgan + Winston

API: CleanURI (https://cleanuri.com/)

Dev: Tools: Vite, VS Code