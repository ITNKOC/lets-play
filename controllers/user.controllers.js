// internal import:
const User = require('../models/User');
const authUtils= require('../utils/auth.utils');
const jwt = require('jsonwebtoken');



exports.user = (req,res) => {
    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no permited');
    }
    const isAdmin = authUtils.isAdmin(req);
    if (!isAdmin){
        return res.status(401).send ('only admin can update user info')
    }
    res.status(200).send (User.find());
}
exports.updateUser = (req,res) => {

    const email = req.body.email;
    const password = req.body.password;

    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no update permited')
    }
    const isAdmin = authUtils.isAdmin(req);
    if (!isAdmin){
        return res.status(404).send ('only admin can update user info')
    }
    if (email === undefined || email.trim() === '') {
        return res.status(404).send('invalid email');
    }
    if (password === undefined || password.trim() === '') {
        return res.status(404).send('invalid password');
    }
    const existingUser = User.findByEmail(email);
    if (existingUser) {
        return res.status(409).send('User already exists with this email');
    }
    const id = req.params.id;    
    User.updateByIdAdmin(req.body,id);
  

//  réponse si tout se passe bien
res.status(200).send(`user ${id} updated succefully`);
};

exports.deleteUser = (req,res) => {
    const id = req.params.id;


    const isValidToken= authUtils.protect(req);
    if (!isValidToken){
        return res.status(401).send ('no delete permited')
    }
    const isAdmin = authUtils.isAdmin(req);
    if (!isAdmin){
        return res.status(401).send ('only admin can delete user')
    }
    const existingUse = User.findById(id);
    if (existingUse===null){
        return res.status(404).send('No user exsist with this Id');
    }
    User.deleteById(id);
    res.status(204).send (`utilisateur ${id} supprimer avec success`);
};