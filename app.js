require('dotenv/config');

require('./db');

const express = require('express');
const app = express();

require('./config')(app)
require("./config/session.config")(app)

app.locals.appTitle = `Basic-Auth`;

const indexRouter = require('./routes/index.routes');
app.use('/', indexRouter);

const authRouter = require('./routes/auth.routes')
app.use('/', authRouter)

const userRouter = require('./routes/user.routes')
app.use('/', userRouter)

require('./error-handling')(app);

module.exports = app;

