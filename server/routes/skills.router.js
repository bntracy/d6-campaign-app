const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.post('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `INSERT INTO "skills" (character_id, skill_name, associated_attribute, skill_dice, skill_bonus)
        VALUES ($1, $2, $3, $4, $5)`;
    pool.query(sqlQuery, [req.body.character_id, req.body.skill_name,
        req.body.associated_attribute, req.body.skill_dice, req.body.skill_bonus])
    .then(response => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error POSTing skill', error);
        res.sendStatus(500);
    });
});

module.exports = router;