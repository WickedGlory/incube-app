# iNCUBE - Virtual Business Incubator

Full-stack web application for a virtual business incubator.

## Tech Stack
- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB + Mongoose
- **Auth**: JWT + bcrypt

## Project Structure
```
incube-app/
├── client/          # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Resources.tsx
│   │   │   ├── Mentorship.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── assets/
│   │   └── App.tsx
│   └── package.json
├── server/          # Express backend
│   ├── src/
│   │   ├── config/db.ts
│   │   ├── models/User.ts
│   │   ├── controllers/authController.ts
│   │   ├── routes/authRoutes.ts
│   │   └── server.ts
│   └── package.json
└── README.md
```

## Getting Started

### Backend
```bash
cd server
npm install
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```

Backend runs on http://localhost:5000  
Frontend runs on http://localhost:5173

## Features Implemented
- User Registration & Login (Entrepreneur / Mentor roles)
- JWT Authentication
- Protected Routes
- Dashboard
- Resource Library (search + filter)
- Mentorship page (basic mentor cards)
- Responsive design with Tailwind

This repository contains the code developed during the guided VS Code build session.
