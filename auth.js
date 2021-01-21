const jsonwebtoken = require("jsonwebtoken");

const { addUser, findByUserName } = require('./User')
const JWT_SECRET = "janitha000"



const login = (username, password) => {
    const user = findByUserName(username);
    if (!user) {
        throw new Error('User does not exist on the system')
    }

    const valid = (user.password === password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    return jsonwebtoken.sign({ id: user.id, userName: user.userName, role: user.role }, JWT_SECRET)
}

const register = (userName, name, password) => {
    const user = addUser({ userName, name, password });
    return jsonwebtoken.sign({ id: user.id, userName: user.userName, role: user.role }, JWT_SECRET)
}


module.exports = {
    register,
    login
}