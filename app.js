require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const errorController = require("./controller/error")
const controllerGameMode = require('./controller/gameMode')
controllerGameMode.createSituations();

app.use(bodyParser.urlencoded({ extended: true }))

const waitRoute = require('./routers/wait.js');
const drawRoute = require('./routers/draw');
const answerRoute = require('./routers/answer');
const login = require('./routers/login.js');
const sequelize = require('./db')

app.use('/', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')


app.use('/wait', waitRoute);
app.use('/draw', drawRoute);
app.use('/answer', answerRoute);


app.use(login);
app.use(errorController.get404);

app.listen(process.env.PORT, () => {
    sequelize.sync();
});