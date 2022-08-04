const connection = require('../config/connection')
const {User} = require('../models')

connection.on('open', async () => {
    await User.deleteMany()
    await User.create({
        username: 'Test',
        email: 'test@test.com',
        password: 'testtest',
        savedGames: [
            {
                gameId: 1,
                name: 'Test Game 1',
                description: 'Test Description 1',
                metacritic: 5,
                released: '2022/10/10',
                background_image: 'picture1',
                website: 'www.test1.com',
                rating: 5,
                metacritic_url: 'www.metacritic1.com',
                esrb_rating: 'everyone',
                platforms: [
                    'Xbox',
                    'Playstation'
                ]
            },
            {
                gameId: 2,
                name: 'Test Game 2',
                description: 'Test Description 2',
                metacritic: 5,
                released: '2022/10/10',
                background_image: 'picture2',
                website: 'www.test2.com',
                rating: 5,
                metacritic_url: 'www.metacritic2.com',
                esrb_rating: 'everyone',
                platforms: [
                    'Xbox',
                    'Playstation'
                ]
            }
        ]
    })
    process.exit(0)
})

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