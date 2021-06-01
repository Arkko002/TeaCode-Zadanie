const axios = require("axios")

let getUserData = async () => {
    return new Promise((resolve, reject) => {
        axios.get("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json")
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                console.error(error)
                reject(error)
            })
    })
}

export default {
    getUserData
}