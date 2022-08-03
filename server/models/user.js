const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const gameSchema = require('./videoGame')

const userSchema = new Schema({
    username: {
        type: String,
        required: 'A username is required.',
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: 'An email is required',
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address'],
    }, 
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    savedGames: [gameSchema]
}, {
    timestamps: true,
})

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
})

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User