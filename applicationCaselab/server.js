import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import bluebird from 'bluebird';

import config from './config';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import errorHandler from './middlewares/errorHandler';
import getUser from './middlewares/getUser';
import checkToken from './middlewares/checkToken';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/user-db",{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });

app.listen(config.port, err => {
	if (err) throw err;

	console.log('Server listening on port $(config.port)');
});

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: config.secret
}));

app.use('/', authRoute);
app.use('/', checkToken, userRoute);
app.use(getUser);

app.use(errorHandler);