const axios = require("axios");

const BACKEND_URL = "https://backend-babybloom.onrender.com/api/health";
const PING_INTERVAL = 5 * 60 * 1000; // 5 minutes

const pingBackend = async () => {
  try {
    const response = await axios.get(BACKEND_URL);
    console.log(`Pinged backend: ${response.status}`);
  } catch (error) {
    console.error("Error pinging backend:", error.message);
  }
};

// Ping the backend at regular intervals
setInterval(pingBackend, PING_INTERVAL);

// Initial ping
pingBackend();
