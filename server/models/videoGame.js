const {Schema} = require('mongoose');

const gameSchema = new Schema({
    gameId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    metacritic: {
        type: Number,
    },
    released: {
        type: String,
        // Date?
    },
    background_image: {
        type: String,
    },
    website: {
        type: String,
    },
    rating: {
        type: Number,
    },
    metacritic_url: {
        type: String,
    },
    // esrb and platforms call returns are objects, we need to pull only the name
    esrb_rating: {
        type: String,
    },
    platforms: [{
        type: String,
    }]
})

// videoGame
//     {
    // gameId Number
    // name String
    // description String
    // metacritic Number
// released Date(String?)
// background_image String
// website String
// rating Number
// metacritic_url String
// esrb_rating String
// platforms String
// }


module.exports = gameSchema;