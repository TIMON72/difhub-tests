const request = require('request')

module.exports = async (url, options) => 
    new Promise((resolve, reject) => {
        request(url, options, (error, response, data) => {
            if(error) reject(error)
            else resolve([response.statusCode, response.statusMessage])
        })
    })