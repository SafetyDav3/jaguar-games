const mongoose = require('mongoose')

mongoose.connect (process.env.MONGODB_URI || 'mongodb://localhost:27017/jaguar_games_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose.connection