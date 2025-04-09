//internal export
const User = require('../models/User');
const authUtils = require('../utils/auth.utils')


exports.wins = (req,res) => 
{
    //1-verifier si le token est valide 
    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no permited');
    }
    //2-on utilise la fonction win
    User.win(req.userId);
    res.status(200).send('vous avez gagner 1 point');
}
exports.lose = (req,res) => 
{ 
     //1-verifier si le token est valide 
    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no update permited');
    }
    //2-on utilise la fonction lose
    User.lose(req.userId);
    res.status(200).send('vous avez perdu 1 point');
}