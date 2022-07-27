const User = require("../database/User")

const getAllUsers = () => {
    const allUsers = User.getAllUsers()
    return allUsers
}

const getOneUser = () => {
    
}

const createNewUser = (newUser) => {
    const createdUser = User.createNewUser(newUser)
    return createdUser
}

const updateUser = () => {
    
}

const deleteUser = () => {
    
}

module.exports = {
    getAllUsers,
    createNewUser
}