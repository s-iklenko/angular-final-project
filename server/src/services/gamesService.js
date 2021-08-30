const {GameCard} = require('../models/gameModel');

const getGames = async () => {

    const games = await GameCard.find({});
    return games;

}

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