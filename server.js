import express from 'express'

const api = express();
api.listen(8002, () => {
	console.log("Hola desde puerto 8002");
});
