//external import

//internal import
const authUtils = require('../utils/auth.utils');
const User = require('../models/User');

exports.getMe=(req,res)=>
{    

    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no permited');
    }
    const user = User.findById(req.userId);

    res.status(200).send(user);
}
exports.updateMe=(req,res)=>
{   const email = req.body.email;
    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no update permited');
    }
    const existingUser = User.findByEmail(email);
    if (existingUser) {
        return res.status(409).send('User already exists with this email');
    }

    User.updateById(req.body,req.userId);

    res.status(200).send ('profil modifier');
}
exports.deleteMe=(req,res)=>
{
    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no delete permited');
    }
    User.deleteById(req.userId);
    res.status(204).send ('profil suprimer');
}
exports.resetScore=(req,res)=>
{
    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no reset permited');
    }
    User.resetScore(req.userId);
    res.status(200).send('score reset');
}