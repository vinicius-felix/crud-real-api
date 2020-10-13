const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    message: process.env.MESSAGE
  });
});

module.exports = router;