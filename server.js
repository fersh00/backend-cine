import express from 'express'
import connect from './config.js';
import { userRoutes } from './routes/userRoutes.js';

connect();

const api = express();
api.use(express.json());

api.listen(8002, () => {
	console.log("Hola, desde puerto 8002");
});

api.use( userRoutes );

