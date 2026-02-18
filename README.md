# PayTM Clone

A simple PayTM clone built for learning full-stack web development with the MERN stack.

## Tech Stack

**Backend:** Node.js, Express 5, MongoDB, Mongoose, JWT

**Frontend:** React 19, Vite

## Project Structure

```
PmtClone/
├── Backend/
│   ├── index.js          # Express server entry point
│   ├── db.js             # MongoDB connection & User model
│   ├── config.js         # JWT secret configuration
│   ├── auth.js           # JWT authentication middleware
│   └── routes/
│       ├── index.js      # Main router
│       └── user.js       # User auth & profile routes
└── Frontend/
    └── PayTM Clone/
        └── src/
            ├── main.jsx  # React entry point
            └── App.jsx   # Main app component
```

## API Endpoints

| Method | Endpoint              | Description         | Auth Required |
|--------|-----------------------|---------------------|---------------|
| GET    | `/api/v1/user/`       | Health check        | No            |
| POST   | `/api/v1/user/signup`  | Register a new user | No            |
| POST   | `/api/v1/user/login`   | Login               | No            |
| PUT    | `/api/v1/user/`       | Update profile      | Yes           |
| GET    | `/api/v1/user/bluck`   | Search users        | No            |

## Getting Started

### Prerequisites

- Node.js
- MongoDB running locally

### Backend Setup

```bash
cd Backend
npm install
node index.js
```


### Frontend Setup

```bash
cd "Frontend/PayTM Clone"
npm install
npm run dev
```

### Environment Variables

Create a `.env` file inside `Backend/`

