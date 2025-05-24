require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: ["https://ai-news-app-aftab0008-aftabs-projects-1a8dhttps://ai-news-front.vercel.app/2dcd.vercel.app/"]
}));


const PORT = 5000;
const API_KEY = process.env.NEWS_API_KEY;

app.get('/api/news', async (req, res) => {
  console.log('📡 API call to /api/news received');
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=${API_KEY}`);
    console.log('✅ News fetched');
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error fetching news:', error.message);
    res.status(500).json({ message: 'Failed to fetch news.' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
