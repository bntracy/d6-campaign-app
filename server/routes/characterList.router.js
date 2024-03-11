const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    // this request gets all characters and is for the gamemaster only
    if (req.user.access_level === 1) {
      const sqlQuery = `SELECT "user".username, character.id, character.character_name FROM "character"
        JOIN "user" ON "user".id=character.user_id;`;
      pool.query(sqlQuery).
      then(response => {
        res.send(response.rows);
      }).catch(error => {
        console.log('Error getting all characters', error);
        res.sendStatus(500);
      });
    } else {
      res.sendStatus(403);
    }
});

module.exports = router;