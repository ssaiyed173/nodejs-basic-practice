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
module.exports.getUsers = () =>{ 
    return users
}
module.exports.getUser = (id) => {
	for(user of users){
       if(user.id == id){
		   return user
	   }
    }
}
module.exports.delete = (id) => {
    var userIndex = getUserIndex(id)
    users.splice(userIndex,1)
}
module.exports.update = (id,newUser) => {
    var oldUser = users[getUserIndex(id)]
    if(oldUser.id == id){
        for(prop in oldUser){
            if(newUser[prop] != undefined){
                oldUser[prop] = newUser[prop]
            }
        }
    }
}
function getUserIndex(id){
    for(i=0; i<users.length; i++){
        if(users[i].id == id){
            return i
        }
    }
}