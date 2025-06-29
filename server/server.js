const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const bookings = require('./routes/bookings');
app.use('/api/bookings', bookings);

app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
