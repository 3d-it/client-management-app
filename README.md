📌 Client Management App

A lightweight and efficient Client Management System (CMS) built with React, Node.js, Express, SQLite, and a clean front-end UI. This full-stack CRUD application allows users to add, edit, update, and delete clients with a streamlined interface designed for small businesses, freelancers, and developers learning CRUD architecture.

🚀 Features

➕ Add new clients

✏️ Edit existing client details

❌ Delete clients

📄 Real-time updating client table

🗂 Displays ID + row number

🗄 Backend powered by SQLite

🔌 RESTful API using Express.js

🎨 Clean and responsive front-end UI

📦 Modular folder structure

🛠 Tech Stack
Frontend

HTML

CSS

React

Backend

Node.js

Express.js

SQLite (lightweight file-based database)

Tools

VS Code

Git & GitHub

📁 Project Structure
client-management-app/
│
├── backend/
│   ├── server.js
│   ├── clients.js
│   ├── db.js
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│
├── package.json
├── README.md
└── .gitignore

▶️ How to Run the Project Locally
1. Clone the repository
git clone https://github.com/3d-it/client-management-app.git
cd client-management-app

2. Install dependencies
npm install

3. Start the backend server
node backend/server.js

4. Open the frontend

Open frontend/index.html in your browser
—or host it with a simple local server:

npx serve frontend

🔌 API Endpoints
Method	Endpoint	Description
GET	/clients	Get all clients
POST	/clients	Add a new client
PUT	/clients/:id	Update a client
DELETE	/clients/:id	Delete a client


🎯 Why This Project Exists

This app was built to demonstrate a clean, modular approach to:

Full-stack React development

Building CRUD systems

Working with SQLite databases

Designing user-friendly admin dashboards

Deploying real-world small-business tools

Perfect for developers building their portfolio or small teams needing an easy CMS.
