const connection = require('../config/connection')
const {User} = require('../models')

connection.on('open', async () => {
    await User.deleteMany()
    await User.create({
        username: 'Test',
        email: 'test@test.com',
        password: 'testtest'
    })
    process.exit(0)
})