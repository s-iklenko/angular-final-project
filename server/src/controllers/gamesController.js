const express = require("express");
const router = express.Router();

const {
  getGames,
  addGame,
  getGamesAction,
  getGamesRPG,
  getGamesAdventure
} = require("../services/gamesService");

const { asyncWrapper } = require("../utils/apiUtils");
const { InvalidRequestError } = require("../utils/errors");

router.get(
  "/games",
  asyncWrapper(async (req, res) => {
    const games = await getGames(req.body);

    res.json(games);
  })
);

// router.get(
//   "/games/:id",
//   asyncWrapper(async (req, res) => {
//     // const {userId} = req.user;
//     const {id} = req.params;
//     const games = await getGamesID(id);

//     if (!games) {
//       throw new InvalidRequestError('No game with such id found!');
//     }

//     res.json(games);
//   })
// );

router.get(
  "/games/action",
  asyncWrapper(async (req, res) => {
    const games = await getGamesAction(req.body);

    res.json(games);
  })
);
router.get(
  "/games/rpg",
  asyncWrapper(async (req, res) => {

    const games = await getGamesRPG(req.body);

    res.json(games);
  })
);
router.get(
  "/games/adventure",
  asyncWrapper(async (req, res) => {
    const games = await getGamesAdventure(req.body);

    res.json(games);
  })
);

router.post(
  "/games",
  asyncWrapper(async (req, res) => {
    const { title, subtitle, img, description, price } = req.body;

    await addGame({ title, subtitle, img, description, price });
    res.json({ message: "Game created successfully" });
  })
);

module.exports = {
  gameRouter: router,
};
