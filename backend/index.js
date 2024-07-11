const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Example endpoint
app.get('/categories/:categoryName/products', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});