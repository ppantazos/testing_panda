
const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default:{
        SECRET: '123',
        DATABASE: 'mongodb://localhost:27017/TestDome'
    }
}

exports.get = function get(env){
    return config[env] || config.default
}