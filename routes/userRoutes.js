import express from 'express'
import { createUser } from '../controllers/userControllers.js'

const userRoutes = express.Router();

userRoutes.post('/users', createUser);

export { userRoutes };