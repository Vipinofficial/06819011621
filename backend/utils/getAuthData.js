const axios = require("axios");
const { companyConfig } = require("../config/companyDetailsConfig.js");

async function getAuthData(companyName) {
    authUrl = `http://20.244.56.144/test/auth`
    const authResponse = await axios.post(authUrl, companyConfig.companyName);
    console.log("AuthResponse: ", authResponse);
    return authResponse;
}

module.exports = {
    getAuthData
}