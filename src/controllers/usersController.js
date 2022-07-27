const userService = require("../services/userService")

const getAllUsers = (req, res) => {
    const allUsers = userService.getAllUsers()
    res.status(200).json({status: "ok", data: allUsers})
}

const getOneUser = (req, res) => {
    const { id } = req.params
    res.status(200).json({status: "ok", id: Number(id)})
}

const createNewUser = async (req, res) => {
    const { name, age, email, country } = req.body

    if(!name ||  !email ||  !age ||  !country) {
        res.status(400).json({status: "error", 
                  err: "You must fill all the fields", 
                  reason:"Fields: name, email, age, or country are empty"
        })
    } 

    const newUser = {
        name: name,
        age: age,
        email: email,
        country: country
    }

    const createdUser = await userService.createNewUser(newUser)
    res.status(201).json({msg: "Usuario creado correctamente!", data: createdUser})
}

const updateUser = (req, res) => {
    const { id } = req.params
    // Servicio de editar
    res.status(200).json({msg: "Usuario actualizado!"})
}

const deleteUser = (req, res) => {
    const { id } = req.params
    // Servicio de eliminar usuario
    res.json({msg: "Usuario eliminado!"})
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}