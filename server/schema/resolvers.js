const {User} = require('../models')
const {signToken} = require('../utils/auth')
const {AuthenticationError} = require('apollo-server-express')

const resolvers = {
    Query: {
        // users: async (parent, args, context, info) => {
        //     return await User.find()
        // },
        user: async (parent, args, context, info) => {
            
            if (!args._id && !args.email && !args.username) {
                throw new AuthenticationError('You need to search by id, email, or username')
            }
            const where = {}
            if (args._id) {
                where._id = args._id
            }
            if (args.email) {
                where.email = args.email
            }
            if (args.username) {
                where.username = args.username
            }
            return await User.findOne(where)
                .select('-__v -password')
                .populate('savedGames')
        }
    },
    Mutation: {
        login: async (parent, args, context, info) => {
            const user = await User.findOne({username: args.username})
            if (!user) {
                throw new AuthenticationError('No user with this username');
            }
            const isCorrectPW = await user.isCorrectPassword(args.password);
            if (!isCorrectPW) {
                throw new AuthenticationError('Invalid password')
            }
            const token = signToken(user)
            return {
                token,
                user
            } 
        },
        addUser: async (parent, args, context, info) => {
            const newUser = await User.create(args)
            const token = signToken(newUser)
            return {
                user: newUser,
                token
            }
        },
        updateUser: async (parent, args, context, info) => {
            return await User.findByIdAndUpdate(args._id, args, {new: true})
        },
        deleteUser: async (parent, args, context, info) => {
            return await User.findByIdAndDelete(args._id)
        },
        //add videogame
        saveGame: async (parent, {gameId,name, description, metacritic, released, background_image, website, rating, metacritic_url, esrb_rating, platforms}, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: { savedGames: {gameId,name, description, metacritic, released, background_image, website, rating, metacritic_url, esrb_rating, platforms}}},
                    {new: true}
                )
                return updatedUser;
            }
            throw new AuthenticationError('Something went wrong');
        },
        //deletevideogame
        deleteGame: async (parent, {gameId}, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savedGames: {gameId}}},
                    {new: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError('Something went wrong');
        }
    }
}

module.exports = resolvers