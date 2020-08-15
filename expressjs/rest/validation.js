module.exports.validateEmail = (email) => {
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if(email.match(regex))
        return true
    else
        return false
}
