import express from "express";
import {
  createUser,
  getAllUsers,
  finaldeleteUser,
} from "../controllers/userControllers.js";
import { register, login } from "../controllers/authController.js";
import { authValidator } from "../middlewares/authValidator.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const userRoutes = express.Router();
const authRoutes = express.Router();

userRoutes.post("/users", createUser);
userRoutes.get("/users", authValidator, isAdmin, getAllUsers);
userRoutes.delete("/users/:userId", finaldeleteUser);

authRoutes.post("/register", register);
authRoutes.post("/login", login);

export { userRoutes, authRoutes };
