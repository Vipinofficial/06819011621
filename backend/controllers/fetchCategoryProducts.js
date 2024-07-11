const getDataFromURLUtility = require("../utils/getDataFromURL");
const allowedCompanyList = ["AMAZON", "FLIPKART", "SNAPDEAL", "MYNTRA", "SHOPIFY"]
const baseURL = "http://20.244.56.144"
final = []
async function fetchCategoryProducts(req, res) {
    const categoryName = req.params.categoryName;
    const n = req.query?.top;

    for (let companyName of allowedCompanyList) {
        const url = buildRequestURL(companyName, categoryName, n);
        const response = getDataFromURLUtility.getDataFromURLUtility(url);
        final.push(response);
    }
}

function buildRequestURL(companyName, categoryName, n) {
    return `${baseURL}/test/companies/${companyName}/categories/${categoryName}/products?top=${n}`;
}

module.exports = {
    fetchCategoryProducts
}