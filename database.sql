-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access_level" INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "character" (
    "id" SERIAL PRIMARY KEY,
    "character_name" VARCHAR(100) NOT NULL,
    "user_id" INTEGER NOT NULL REFERENCES "user",
    "species" VARCHAR(50),
    "gender" VARCHAR(50),
    "age" VARCHAR(50),
    "height" VARCHAR(50),
    "weight" VARCHAR(50),
    "physical_description" VARCHAR(1000),
    "dexterity_dice" INTEGER,
    "dexterity_bonus" INTEGER,
    "knowledge_dice" INTEGER,
    "knowledge_bonus" INTEGER,
    "mechanical_dice" INTEGER,
    "mechanical_bonus" INTEGER,
    "perception_dice" INTEGER,
    "perception_bonus" INTEGER,
    "strength_dice" INTEGER,
    "strength_bonus" INTEGER,
    "techincal_dice" INTEGER,
    "technical_bonus" INTEGER,
    "move" INTEGER,
    "force_sensitive" BOOLEAN,
    "force_points" INTEGER,
    "dark_side_points" INTEGER,
    "character_points" INTEGER,
    "special_abilities" TEXT,
    "equipment" TEXT,
    "notes" TEXT,
    "stunned" BOOLEAN NOT NULL DEFAULT false,
    "wounded_1" BOOLEAN NOT NULL DEFAULT false,
    "wounded_2" BOOLEAN NOT NULL DEFAULT false,
    "incapacitated" BOOLEAN NOT NULL DEFAULT false,
    "mortally_wounded" BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE "skills" (
    "id" SERIAL PRIMARY KEY,
    "character_id" INT NOT NULL REFERENCES "character",
    "skill_name" VARCHAR(100),
    "associated_attribute" VARCHAR(10) NOT NULL,
    "skill_dice" INTEGER,
    "skill_bonus" INTEGER
);