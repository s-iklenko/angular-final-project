const express = require("express");
const path = require('path');
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require('mongoose');
const app = express();
// const envConfig = require('dotenv').config().parsed;

const {usersRouter} = require('./src/controllers/usersController');
const {authRouter} = require("./src/controllers/authController");
const {gameRouter} = require('./src/controllers/gamesController');
const {friendRouter} = require('./src/controllers/friendsController');
const {authMiddleware} = require('./src/middlewares/authMiddleware');
const {NodeCourseError} = require('./src/utils/errors');

// app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors({origin: 'https://shop-steam.herokuapp.com/'}));
app.use(express.json());
app.use(morgan("tiny"));

app.use('/api', gameRouter);
app.use('/api', authRouter);
app.use('/user', [authMiddleware], usersRouter);
app.use('/user', [authMiddleware], friendRouter);

app.get('*',(req, res) =>{
  res.sendFile(path.join(__dirname + './../dist/angular-final-project/index.html'));
})

app.use((req, res, next) => {
    res.status(404).json({message: 'Not found'})
});

app.use((err, req, res, next) => {
    if (err instanceof NodeCourseError) {
        return res.status(err.status).json({message: err.message});
    }
    res.status(500).json({message: err.message});
})


app.get('/', (req, res) => {
    res.end('Server is working...');
});

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Haldey:01280042@cluster.fefns.mongodb.net/nodejs?retryWrites=true&w=majority', {
            useNewUrlParser: true, useUnifiedTopology: true
        });

        app.listen(process.env.PORT || 8080);
    } catch (err) {
        console.error(`Error on server startup: ${err.message}`)
    }
};

start();
