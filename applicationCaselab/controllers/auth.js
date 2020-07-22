import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';

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
	
	res.json(user);
	}
}

export const signin = async (req,res,next) => {//авторизация
	const { login, password } = req.body;//получение данных

	const user = await User.findOne( {login} );//поиск по логину

	if (!user) {//если нет юзера, то ошибка
		return next({
			status: 400,
			message: 'User not found'
		});
	};

	try {
		const result = await user.comparePasswords(password);// сравнение пароля введенного и того что в базе лежит
		console.log(result);
		if (!result){ 
			return next({
				status: 400,
				message: 'Wrong Password!'
			});
		}		
	} catch (e) {
		return next({
			status: 400,
			message: 'Bad Credentials'
		});	
	}
	const token = jwt.sign({_id: user._id}, config.secret);
	res.json(token);
}
