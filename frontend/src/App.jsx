import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ShortenForm from './pages/ShortenForm';
import NotFound from './pages/NotFound';
import sendLog from './utils/sendLog';
import { useEffect } from 'react';

// Custom component to listen for route changes
function RouteLogger() {
  const location = useLocation();

  useEffect(() => {
    sendLog(` Navigated to ${location.pathname}`);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <RouteLogger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorten" element={<ShortenForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
