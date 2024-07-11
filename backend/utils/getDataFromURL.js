const axios = require("axios");
const { getAuthData } = require("./getAuthData")

const baseUrl = "http://20.244.56.144"

async function getDataFromURL(url, companyName) {
    console.log("CompanyName: ", companyName, " and URL: ", url);
    const authData = await getAuthData(companyName);
    await axios.post(url, {
        headers: authData
    })
}

module.exports = {
    getDataFromURL
}