const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllUsers = async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers
}

const createNewUser = async (newUser) => {
    const createdUser = await prisma.user.create({
        data: newUser
    })
    return createdUser
}

module.exports = {
    getAllUsers,
    createNewUser
}