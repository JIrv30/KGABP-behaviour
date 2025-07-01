import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

// Allow cross-origin requests
app.use(cors());

// Replace these with real values
const ARBOR_URL = 'https://brune-park-community-school.uk.arbor.sc/rest-v2/students?format=json';
const API_TOKEN = '$2y$13$MT3MvcTNUJnbqh66lsDtA.NqfqlXCwpYv43T8mb83lzKlcki7DEJ2';

app.get('/api/students', async (req, res) => {
  try {
    const response = await fetch(ARBOR_URL, {
      headers: {
        'Accept': 'application/json',
        'X-AUTH-TOKEN': API_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`Arbor API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Failed to fetch Arbor data:', error.message);
    res.status(500).json({ error: 'Failed to fetch Arbor data' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
