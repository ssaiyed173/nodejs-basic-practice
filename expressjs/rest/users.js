const User = require('./user')

let users = new Array()

users.push(new User(1,'Shahnavaz',24))
users.push (new User(2,'Rahul',23))
users.push(new User(3,'Mehul',24))

/*function showUsers(){
    for(user of users){
        console.log(user.id+' '+user.userName)
    }
}*/
module.exports.add = (user)=> 
{
    users.push(user)
}
module.exports.getUsers = ()=>{ 
    return users
}