const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.query);
    const id = req.query.character_id;
    if (req.user.id === Number(req.query.associated_user_id) || req.user.access_level === 1) {
      const firstSqlQuery = `SELECT * FROM "character" WHERE id=$1;`;
      const secondSqlQuery = `SELECT "id", "skill_name", "associated_attribute", "skill_dice", "skill_bonus"
        FROM "skills" WHERE character_id=$1 ORDER BY "id";`;
      pool.query(firstSqlQuery, [id])
      .then(response => {
        const character = response.rows[0];
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
    } else {
      res.sendStatus(403);
    }
  });

module.exports = router;