import express from 'express'
import { createUser, getAllUsers, finaldeleteUser } from '../controllers/userControllers.js'

const userRoutes = express.Router();

userRoutes.post('/users', createUser);
userRoutes.get('/users', getAllUsers);
userRoutes.delete('/users/:userId', finaldeleteUser);

export { userRoutes };