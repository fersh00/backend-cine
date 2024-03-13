import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	DNI: {
		type: String,
		default: '1234'
	},
	name: {
		type: String,
		default: 'Juan',
	},
	lastname: {
		type: String,
		default: 'Perez',
	},
	dob: {
		type: String,
		default: '121212',
	},
	rol: {
		type: String,
		default: 'Cliente',
	},
	phone: {
		type: String,
		default: 'XXX XXX XXXX'
	},
	email: {
		type: String,
		default: 'user@mail.com'
	},
	username: {
		type: String,
		default: 'juanperez',
	},
	password: {
		type: String,
		default: '1234'
	},
	isDeleted: {
		type: Boolean,
		default: false,
	},		
});

export default mongoose.model('User', userSchema);