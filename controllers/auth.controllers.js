//internal import
const User = require('../models/User');
//external import :
const jwt = require('jsonwebtoken');

//Route POST/auth/login :
exports.login = (req, res) => {

 
    // 0. recup email et pass du body
    const email = req.body.email;
    const password = req.body.password;


    // 1. verifie si email et le mot de passe sont valide ou non
    if (email === undefined || email.trim() === '') {
        return res.status(400).send('invalid email');
    }
    if (password === undefined || password.trim() === '') {
        return res.status(400).send('invalid password');
    }

    // 2. recup l'utilisateur avec l'email, retourner une erreur si non trouvé
    const user = User.findByEmail(email);
  
    if (user===null) {
        return res.status(401).send('user not found with this email');
    }

    // 3. comparer les mots de passe
    if (user.password !== password) {
        return res.status(401).send('incorrect password');
    }

    // 4. generer et envoyer un token
    const token = jwt.sign({'id': user.id},'play2023');

    //  réponse si tout se passe bien
    res.status(200).send(token);
};



//Route POST/auth/register :

exports.register = (req, res) => {
        
       
        // 0. recup email et pass du body
         const email = req.body.email;
         const password = req.body.password;
         const username = req.body.username;
        
       // 1. verifie si email et password et username valid : 
        if (email === undefined || email.trim() === '') {
            return res.status(400).send('use a valid email');
        }
        if (password === undefined || password.trim() === '') {
            return res.status(400).send('use a valid password');
        }
        if (username === undefined || username.trim() === '') {
            return res.status(400).send('use a valid username');
        }
        // 2.Vérifier si l'email existe déjà
        const existingUser = User.findByEmail(email);
        if (existingUser) {
            return res.status(409).send('User already exists with this email');
        }
        // 3.Vérifier si l'username existe déjà
        const existingUserName = User.findByUserName(username);
        if (existingUserName) {
            return res.status(409).send('User already exists with this username');
        }
    
        //4. Créer un nouvel utilisateur
        const newUser = User.create(email, password, username); 
    
        // 5.token
        const token = jwt.sign({ 'id': newUser.id }, 'play2023');
    
        //6. Réponse si tout se passe bien
        res.status(201).send(token);
};
