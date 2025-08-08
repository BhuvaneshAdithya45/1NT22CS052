import axios from 'axios';

const sendLog = async (message, level = 'info') => {
  try {
    await axios.post('http://localhost:4000/log', {
      message,
      level,
      timestamp: new Date().toISOString(),
    });
    console.log(` [${level.toUpperCase()}] Log sent:`, message);
  } catch (error) {
    console.error(' Failed to send log:', error.message);
  }
};

export default sendLog;
