const express = require('express');
const router = express.Router();
const fs = require('fs');
const dbPath = path.join(__dirname, '../data/db.json');

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath));
  res.json(data.bookings || []);
});

router.post('/', (req, res) => {
  const { name, email, duration, time, preferredPlatform } = req.body;
  const data = JSON.parse(fs.readFileSync(dbPath));

  const newBooking = {
    id: Date.now(),
    name,
    email,
    duration,
    time,
    preferredPlatform,
    status: 'pending'
  };

  data.bookings.push(newBooking);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  res.status(201).json({ success: true, message: 'Booking saved!' });
});

module.exports = router;
