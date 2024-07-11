const express = require('express');
const app = express();
const port = 3000;
const categoryProductsController = require("./controllers/fetchCategoryProducts.js");

app.use(express.json());

// endpoint to handle products request
app.get('/categories/:categoryName/products', categoryProductsController.fetchCategoryProducts);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});