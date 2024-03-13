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

router.put('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `UPDATE "skills" SET "skill_name"=$1, "skill_dice"=$2, "skill_bonus"=$3
        WHERE id=$4;`;
    pool.query(sqlQuery, [req.body.skill_name, req.body.skill_dice, req.body.skill_bonus, req.body.id])
    .then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error in skills PUT', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `DELETE FROM "skills" WHERE id=$1`;
    pool.query(sqlQuery, [req.params.id])
    .then(response => {
        res.sendStatus(204);
    })
    .catch(error => {
        console.log('Error deleting skill', error);
        res.sendStatus(500);
    });
})

module.exports = router;