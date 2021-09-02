const {GameCard} = require('../models/gameModel');
const {myGameCard} = require("../models/myGameModel");

const getGames = async () => {

    const games = await GameCard.find();
    return games;

}

// const getGamesID = async (gameId) => {

//   let copy = GameCard.findOne({},{gameId});
//   for (let i = 0; i< 30; i++){
//     await myGameCard.insertMany(copy);
//   }

  // GameCard.find(gameId).forEach( function(doc){myGameCard.insertMany(
  //   {
  //     "title":doc.title,
  //     "subtitle":doc.subtitle,
  //     "img":doc.img,
  //     "description":doc.description,
  //     "price":doc.price,
  //   }
  // )} );
  // const myGame = new myGameCard(copy);
  // await myGame.save();
  // return copy

//}

const getGamesAction = async () => {

    const games = await GameCard.find({subtitle: 'Action'});
    return games;

}
const getGamesRPG = async () => {

    const games = await GameCard.find({subtitle: 'RPG'});
    return games;
}
const getGamesAdventure = async () => {

    const games = await GameCard.find({subtitle: 'Adventure'});
    return games;

}

const addGame = async ({title, subtitle, img, description, price}) => {
    const game = new GameCard({title, subtitle, img, description, price});
    await game.save();
};


module.exports = {
    getGames,
    addGame,
    getGamesAction,
    getGamesRPG,
    getGamesAdventure
};
