const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    const firstSqlQuery = `SELECT * FROM "character" WHERE id=$1;`;
    const secondSqlQuery = `SELECT * FROM "skills" WHERE character_id=$1 ORDER BY "id";`;
      pool.query(firstSqlQuery, [id])
      .then(response => {
        const character = response.rows[0];
        // does this character belong to the user?
        if (character.user_id !== req.user.id && req.user.access_level !== 1) {
          res.sendStatus(403);
        }
        pool.query(secondSqlQuery, [id]).then(secondResponse => {
          const skills = secondResponse.rows;
          character.dexterity_skills = [];
          character.knowledge_skills = [];
          character.mechanical_skills = [];
          character.perception_skills = [];
          character.strength_skills = [];
          character.technical_skills = [];
          for (let skill of skills) {
            switch (skill.associated_attribute) {
              case 'Dexterity':
                character.dexterity_skills.push(skill);
                break;
              case 'Knowledge':
                character.knowledge_skills.push(skill);
                break;
              case 'Mechanical':
                character.mechanical_skills.push(skill);
                break;
              case 'Perception':
                character.perception_skills.push(skill);
                break;
              case 'Strength':
                character.strength_skills.push(skill);
                break;
              case 'Technical':
                character.technical_skills.push(skill);
                break;
            } // end switch
          } // end for
          res.send(character);
        }).catch(error => {
          console.log(`Error in second query ${secondSqlQuery}`, error);
          res.sendStatus(500);
        });
      }).catch(error => {
        console.log(`Error in first query ${firstSqlQuery}`, error);
        res.sendStatus(500);
      });
  });

  router.post('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `INSERT INTO "character" (character_name, user_id, species, gender, age, height, weight, physical_description)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    pool.query(sqlQuery, [req.body.character_name, req.user.id,
      req.body.species, req.body.gender,
      req.body.age, req.body.height,
      req.body.weight, req.body.physical_description])
    .then(response => {
      res.sendStatus(201);
    }).catch(error => {
      console.log('Error in POST', error);
      res.sendStatus(500);
    });
  });

  router.put('/', rejectUnauthenticated, (req, res) => {
    if (req.user.id === Number(req.body.user_id) || req.user.access_level === 1) {
      const sqlQuery = `UPDATE "character"
        SET "character_name"=$1, "species"=$2, "gender"=$3, "age"=$4, "height"=$5,
        "weight"=$6, "physical_description"=$7, "dexterity_dice"=$8, "dexterity_bonus"=$9, "knowledge_dice"=$10,
        "knowledge_bonus"=$11, "mechanical_dice"=$12, "mechanical_bonus"=$13, "perception_dice"=$14, "perception_bonus"=$15,
        "strength_dice"=$16, "strength_bonus"=$17, "technical_dice"=$18, "technical_bonus"=$19, "move"=$20,
        "force_sensitive"=$21, "force_points"=$22, "dark_side_points"=$23, "character_points"=$24, "special_abilities"=$25,
        "equipment"=$26, "notes"=$27, "stunned"=$28, "wounded_1"=$29, "wounded_2"=$30,
        "incapacitated"=$31, "mortally_wounded"=$32
        WHERE id=$33;`;
      pool.query(sqlQuery, [
        req.body.character_name, req.body.species, req.body.gender, req.body.age, req.body.height,
        req.body.weight, req.body.physical_description, req.body.dexterity_dice, req.body.dexterity_bonus, req.body.knowledge_dice,
        req.body.knowledge_bonus, req.body.mechanical_dice, req.body.mechanical_bonus, req.body.perception_dice, req.body.perception_bonus,
        req.body.strength_dice, req.body.strength_bonus, req.body.technical_dice, req.body.technical_bonus, req.body.move,
        req.body.force_sensitive, req.body.force_points, req.body.dark_side_points, req.body.character_points, req.body.special_abilities,
        req.body.equipment, req.body.notes, req.body.stunned, req.body.wounded_1, req.body.wounded_2,
        req.body.incapacitated, req.body.mortally_wounded,
        req.body.id])
      .then(response => {
        res.sendStatus(200);
      }).catch(error => {
        console.log('Error in PUT', error);
        res.sendStatus(500);
      });
    } else {
      res.sendStatus(403);
    }
  });

  router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const firstSqlQuery = `SELECT "user_id" FROM "character" WHERE id=$1`;
    const secondSqlQuery = `DELETE FROM "character" WHERE id=$1`;
    pool.query(firstSqlQuery, [req.params.id])
    .then(response => {
      if (req.user.id === response.rows[0].user_id || req.user.access_level === 1) {
        pool.query(secondSqlQuery, [req.params.id])
        .then(response => {
          res.sendStatus(204);
        })
        .catch(error => {
          console.log('Error deleting data', error);
          res.sendStatus(500);
        });
      } else {
        res.sendStatus(403);
      }
    })
    .catch(error => {
      console.log('Error getting data from server', error);
      res.sendStatus(500);
    });
  });

module.exports = router;