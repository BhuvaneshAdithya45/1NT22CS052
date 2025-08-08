import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import axios from 'axios';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.post('/log', (req, res) => {
  const { message, level, timestamp } = req.body;
  console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
  res.status(200).send('OK');
});


app.post('/shorten', async (req, res) => {
  try {
    const { url } = req.body;

    const response = await axios.post(
      'https://cleanuri.com/api/v1/shorten',
      new URLSearchParams({ url }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error forwarding request:', error.message);
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` Logging Middleware listening on port ${PORT}`);
});
