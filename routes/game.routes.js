//extrnal imports
const express = require('express');

//variables
const routeur = express.Router();  

//internal import
const gameControllers = require('../controllers/game.controllers');

// route
routeur.route('/wins').put(gameControllers.wins);
routeur.route('/lose').put(gameControllers.lose);



//export
module.exports= routeur;