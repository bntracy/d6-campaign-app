# D6 Campaign App

## Description

_Duration: 2 Week Sprint_

My friends and I enjoy tabletop roleplaying games, like Dungeons and Dragons. Our favorite game, however, is a little different than D&D. It’s set in the Star Wars universe, and it uses different statistics and different dice rolls, so any digital tools available for helping with D&D games won't work for us. Also, my players are now spread across the country, and while we can hop on a Zoom call and play, it makes paper character sheets hard to show each other and inconvenient. It would be nice if we had a central place to store and view our character data, so I built one.

To see the fully functional site, please visit: [https://shielded-sea-38538-fdc984ac0832.herokuapp.com/](https://shielded-sea-38538-fdc984ac0832.herokuapp.com/)

## Screen Shot



### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation


1. Create a database named `d6_campaign_app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables to allow the application to run correctly. I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`
4. Add a `.env` file to the root directory containing key `SERVER_SESSION_SECRET` with a random string, more than 8 characters long, as the value.
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. Navigate to `http://localhost:5173/`

## Usage

1. Register with a username and password.
2. Create a new character! Character name is a required field. It can be edited later.
3. Add attribute values, skills, and other stats in their respective fields. Attributes, skills, and character names can be edited using the pencil "edit" icon. Other sections of the character sheet have an "edit section" button available.
4. Click "Notes" to add any character or campaign notes.
5. Click the "Roll" button next to attributes or skills to roll dice. The wild die is handled specially. If it rolls a 6, it adds 6 and rolls again, repeating as necessary. If it rolls a 1, the app will flag that for players in the roll description.
6. Click "Roll History" link at the top of the page to see recent rolls.


## Built With

- Node
- Express
- PostgreSQL
- React
- Redux
- Saga
- Passport
- Material UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.