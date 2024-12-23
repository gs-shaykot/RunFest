const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});