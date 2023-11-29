const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

app = express();

const indexRouter = require('./routes/index/index.router');
const userDataRouter = require('./routes/user/user.router');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', indexRouter);
app.use('/user', userDataRouter);

module.exports = app;
