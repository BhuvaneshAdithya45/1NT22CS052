import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import sendLog from '../utils/sendLog';
import axios from 'axios';

export default function ShortenForm() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    try {
      await sendLog('📤 User submitted URL to shorten');

      const response = await axios.post(
  'http://localhost:4000/shorten', //use backend proxy
  { url },
  {
    headers: {
      'Content-Type': 'application/json',
    },
  }
);


      const shortened = response.data.result_url;

      if (shortened) {
        setShortUrl(shortened);
        await sendLog(`Received short URL: ${shortened}`);
      } else {
        throw new Error(' No result_url returned from API');
      }
    } catch (error) {
      await sendLog(` Error shortening URL: ${error.message}`);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <TextField
        label="Enter your long URL"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
        sx={{ mt: 2 }}
      >
        Shorten URL
      </Button>

      {shortUrl && (
        <Typography sx={{ mt: 4 }}>
          <strong>Short URL:</strong>{' '}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </Typography>
      )}
    </Container>
  );
}
