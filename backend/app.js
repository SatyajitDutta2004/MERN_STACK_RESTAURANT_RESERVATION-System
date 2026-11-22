import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

dotenv.config({ path: "./config/config.env" });
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://mern-stack-restaurant-reservation-s-mu.vercel.app",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     success: true,
//     message: "HELLO WORLD AGAIN",
//   });
// });

dbConnection();

app.use(errorMiddleware);

export default app;
