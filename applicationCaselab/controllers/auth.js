import User from '../models/user';

export const signup = async (req,res,next) => {//временная шняга для создания юзера
	const credentials = req.body;
	let user;

	try{
		user = await User.create(credentials);
	}
	catch ({message}){
		return next({
			status: 400,
			message
	});
	}
}

export const signin = async (req,res,next) => {//авторизация
	const { login, password } = req.body;//получение данных
	console.log("----------------------------------------------------------------------------------")
	console.log(login, password)
	console.log("----------------------------------------------------------------------------------")
	const user = await User.findOne( {login} );//поиск по логину

	if (!user) {//если нет юзера, то ошибка
		console.log("No such user")
		return next({
			status: 400,
			message: 'User not found'
		});
	};
	let result;
	try {
		result = await user.comparePasswords(password);// сравнение пароля введенного и того что в базе лежит
		console.log(result)
	} catch (e) {
		console.log('Неверный пароль')
		return next({
			status: 400,
			message: 'Bad Credentials'
		});
	}
	req.session.userId = user._id;// создание сессии для юзера
	res.json(user);
	result ? console.log("Its okey") : console.log("Its not okey");
}

