import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

const fetchData = async (catalogue_id , access_token) => {
  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${catalogue_id}/products`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${catalogue_id}`, // Replace with your actual Bearer token
        'Cookie': 'ps_l=1; ps_n=1'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

export default fetchData;
// app.get('/whatscommer/productName', async (req, res) => {
//   try {
//     const data = await fetchData();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
