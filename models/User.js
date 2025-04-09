const users = 
[
{
  'id': 1 ,  
  'username' : 'kous',
  'email' : 'kous@gmail.com',
  'password' : 'AAAaaa111',
  'score': 5,
  'isAdmin' : true

},
{
    'id': 2 ,  
    'username' : 'cherif',
    'email' : 'douadicherif98@gmail.com',
    'password' : 'AAAaaa222',
    'score': 2,
    'isAdmin' : false
}
];
exports.find=()=>{
    const userNoAdmin =[];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(!user.isAdmin)
        {
           userNoAdmin.push(user);
        }
    }
    return userNoAdmin;
   
}
exports.updateByIdAdmin=({email, password, score, username,isAdmin},id)=>{
    
    
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.id===parseInt(id)){
            if(email !=="" && email!== undefined){

                user.email = email;
            }
            
            if(password !=="" && password!== undefined){

                user.password = password;
            }
            
            if(score !=="" && score!== undefined){

                user.score = score;
            }
            
            if(username !=="" && username!== undefined){
               
                user.username = username;
            }
            if(isAdmin !=="" && isAdmin!== undefined){
               
                user.isAdmin = isAdmin;
            }

           
        }
        
    }
    return;
}
exports.updateById=({email, password, score, username},id)=>{

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.id===parseInt(id)){
            if(email !=="" && email!== undefined){

                user.email = email;
            }
            
            if(password !=="" && password!== undefined){

                user.password = password;
            }
            
            if(score !=="" && score!== undefined){

                user.score = score;
            }
            
            if(username !=="" && username!== undefined){
               
                user.username = username;
            }
           
        }
        
    }
    return;
}
exports.deleteById=(id)=>
{
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id===parseInt(id)) {
            users.splice(i, 1);
            return;
        }  
    }
    return null;
}
exports.findByEmail = (email)=>{
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email===email) {
            return user;
        }
       
    }
    return null;
}
exports.findByUserName = (username)=>{
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.username===username) {
            return user;
        }

    }
    return null;
}

exports.findById = (id)=>{
for (let i = 0; i < users.length; i++) 
{
    const user = users[i];
    if (user.id===parseInt(id)) 
    {
         return user;
    }  
}
return null;

};
exports.create = (email, password, username) => {
    const id = users.length + 1; 
    const score = 0;
    const admin = false;
    const newUser = {
      id: id,
      username: username,
      email: email,
      password: password,
      score : score,
      isAdmin: admin
    };
    users.push(newUser);
    return newUser;
  };
exports.resetScore=(id)=>
{
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.id===parseInt(id))
        {
            user.score = 0;
        }
        
    }
    return;
}
exports.win=(id)=>
{
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.id===parseInt(id))
        {
            user.score +=1;
        }
        
    }
    return;
}
exports.lose=(id)=>
{
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.id===parseInt(id))
        {
            user.score -=1;
        }
        
    }
    return;
}
