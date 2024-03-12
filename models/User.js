import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	DNI: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	lastname: {
		type: String,
		require: true,
	},
	dob: Number,
	rol: {
		type: String,
		require: true,
	},
	phone: String,
	email: String,
	username: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	isDelete: {
		type: Boolean,
		default: false,
	}

});

export default mongoose.model('User', userSchema);