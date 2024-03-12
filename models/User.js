import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	DNI: {
		type: String,
		default: XXXXXXXXXXXXXXX,
	},
	name: {
		type: String,
		default: 'Juan',
	},
	lastname: {
		type: String,
		defautl: 'Perez',
	},
	dob: {
		type: Number,
		default: XXXXXX,
	},
	rol: {
		type: String,
		require: true,
	},
	phone: {
		type: String,
		default: 'XXXXXXXXXX'
	},
	email: {
		type: String,
		default: 'xxx@email.com'
	},
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