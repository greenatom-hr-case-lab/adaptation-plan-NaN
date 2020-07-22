import User from '../models/user';

export async function getUserByToken(token) {// получение пользователя по токену
	const { _id } = token;

	try {
		var user = await User.findOne({ _id }, {password: 0});//поиск пользователя в базе по id
	} catch (e) {
		throw e;
	}

	return user;
}