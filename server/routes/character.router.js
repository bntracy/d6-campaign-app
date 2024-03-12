const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.query);
    const id = req.query.character_id;
    if (req.user.id === Number(req.query.associated_user_id) || req.user.access_level === 1) {
      // GET request here
      res.sendStatus(500);
    } else {
      res.sendStatus(403);
    }
  });

module.exports = router;