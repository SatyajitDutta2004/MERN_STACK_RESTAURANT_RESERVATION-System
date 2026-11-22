# Restaurant Reservation System

This repository contains a React/Vite frontend and an Express/MongoDB backend.

## Run locally

1. Install and start the backend:

   ```sh
   cd backend
   npm install
   ```

   Copy `config.env.example` to `config/config.env`, then set `MONGO_URI` to your
   MongoDB connection string. Start the server with `npm start`.

2. In another terminal, install and start the frontend:

   ```sh
   cd FRONTEND
   npm install
   ```

   Copy `.env.example` to `.env` if the backend is not running at its default
   local URL, then run `npm run dev`.

## Deploy

Deploy the backend and frontend as separate services:

- **Backend:** use `backend` as the service root, run `npm install` to install
  dependencies, and `npm start` to start the service. Configure `MONGO_URI`
  with your MongoDB connection string and `FRONTEND_URL` with the deployed
  frontend's origin. The service uses the hosting provider's `PORT` variable
  (or port `4000` locally).
- **Frontend:** use `FRONTEND` as the service root, run `npm install` and
  `npm run build`, and publish the `dist` directory. Set `VITE_API_URL` to the
  deployed backend's base URL, without a trailing slash.

Never commit database credentials or production environment files.
