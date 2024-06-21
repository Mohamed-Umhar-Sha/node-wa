const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Use dynamic import for fetchData.mjs
const fetchDataPromise = import('./fetchData.mjs');

app.get('/whatscommerce/getProductName', async (req, res) => {
  try {
    // Resolve the promise to get the module
    const module = await fetchDataPromise;
    // Access the default export of the module
    const fetchData = module.default;
    const data = await fetchData(); // Call the fetchData function to fetch data
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/test', (req, res) => {
  res.send('Test route is working');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
