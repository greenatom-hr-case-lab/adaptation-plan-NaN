//import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	login: {type: String, unique: true, lowercase: true},
	password: String
});

UserSchema.pre('save', async function(next) {
	if (!this.isModified('password')){
		return next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.comparePasswords = function(password) {
	return bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", UserSchema);

module.exports = User;