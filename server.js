import express from 'express'
import connect from './config.js';

connect();

const api = express();

api.listen(8002, () => {
	console.log("Hola, desde puerto 8002");
});


