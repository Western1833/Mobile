const config = {
    production: {
        PORT: 1234,
    },
    development: {
        PORT: 3030,
    }
}

module.exports = config[process.env || development]