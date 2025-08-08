import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <Button variant="contained" component={Link} to="/shorten">Shorten URL</Button>
    </Container>
  );
}
