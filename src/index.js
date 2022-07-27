const express = require('express')
const app = express()

const morgan = require('morgan')

// VARIABLES
const PORT = process.env.PORT || 3000

const v1UsersRoute = require('./v1/routes/users.js')

// MIDDLEWARES
app.use(express.json())
app.use(morgan('dev'))

// ROUTES
app.use('/api/v1/users', v1UsersRoute)

// LISTEN 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})