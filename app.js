import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';

import config from './config';
import router from './routes';

const app = express();
const { port } = config;

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server started on port ', port);
});

export default app;
