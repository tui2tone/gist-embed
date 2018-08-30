const axios = require('axios');
const jsonpAdapter = require('axios-jsonp');
const gistUrl = 'https://gist.github.com/';

const getData = (gistId) => {
    return new Promise((resolve, reject) => {
        const url = gistUrl + gistId + '.json'
        axios.get(url, {
                adapter: jsonpAdapter
            })
            .then((response) => {
                resolve({
                    content: response.data.div
                })
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const embed = async (gistId, elm) => {
    getData(gistId)
        .then((result) => {
            elm.innerHTML = result.content
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = embed