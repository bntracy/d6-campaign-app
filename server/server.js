const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const characterRouter = require('./routes/character.router');
const characterListRouter = require('./routes/characterList.router');
const skillsRouter = require('./routes/skills.router');
const userRouter = require('./routes/user.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/character', characterRouter);
app.use('/api/character-list', characterListRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/user', userRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
