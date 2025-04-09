//external  import
const express = require('express');

// internal imports :
const authRoute = require('./routes/auth.routes');
const gameRoute = require('./routes/game.routes');
const meRoute   = require('./routes/me.routes');
const userRoute = require('./routes/user.routes');

// variable 
const app = express();
const PORT = 5000;

 // listner
app.listen(PORT, () => {
    console.log (`listening on port ${PORT}`);
});

// Body Parser :
app.use(express.json());

//Routeurs :
app.use('/auth', authRoute);
app.use('/game', gameRoute);
app.use('/me', meRoute);
app.use('/users', userRoute);