import express from 'express'
import { createUser, getAllUsers } from '../controllers/userControllers.js'

const userRoutes = express.Router();

userRoutes.post('/users', createUser);
userRoutes.get('/users', getAllUsers);

export { userRoutes };