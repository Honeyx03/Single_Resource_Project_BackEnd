const db = require("../db/dbConfig");

const getAllGames = async () => {
    try {
      const allGames = await db.any("SELECT * FROM games");
      return allGames;
    } catch (error) {
      return error;
    }
  };

   // ONE Game
   const getGame = async (id) => {
    try {
      const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
      return oneGame;
    } catch (error) {
      return error;
    }
  };

  // CREATE -> POST
const createGame = async (game) => {
    try {
        console.log("this is the game", game)
      const newGame = await db.one(
        "INSERT INTO games (name, players, category, cards_required,instructions) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [game.name, game.players, game.category, game.cards_required, game.instructions]
      );
      return newGame;
    } catch (error) {
      return error;
    }
  };

  //DELETE
 const deleteGame = async (id) => {
    try {
      const deletedGame = await db.one(
        "DELETE FROM games WHERE id = $1 RETURNING *",
        id
      );
      return deletedGame;
    } catch (error) {
      return error;
    }
  };

  //UPDATE -> PUT
const updateGame = async (id, game) => {
    try {
      const updatedGame = await db.one(
        "UPDATE games SET name=$1, players=$2, category=$3, cards_required=$4,instructions=$5 where id=$6 RETURNING *",
        [game.name, game.players, game.category, game.cards_required,game.instructions,id]
      );
      return updatedGame;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllGames,
    createGame,
    getGame,
    deleteGame,
    updateGame,
  };