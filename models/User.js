import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	DNI: {
		type: String,
		default: 'X',
	},
	name: {
		type: String,
		default: 'X',
	},
	lastname: {
		type: String,
		default: 'X',
	},
	dob: {
		type: String,
		default: 'X',
	},
	role: {
		type: String,
		required: true,
		enum: ['ADMIN', 'EMPLOYEE', 'CLIENT'],
		default: 'CLIENT',
	},
	phone: {
		type: String,
		default: 'X'
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		default: 'X',
	},
	password: {
		type: String,
		required: true,
	},
	isDeleted: {
		type: Boolean,
		default: false,
	},		
});

export default mongoose.model('User', userSchema);