const express = require("express");
const games = express.Router();
const {
    getAllGames,
    createGame,
    getGame,
    deleteGame,
    updateGame,
} = require("../queries/games");

//INDEX
games.get("/", async (req, res) => {
    const allGames = await getAllGames();
    if (allGames[0]) {
      res.status(200).json(allGames);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW
games.get("/:id", async (req, res) => {
    const { id } = req.params;
    const game = await getGame(id);
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
// CREATE
games.post("/", async (req, res) => {
    try {
        console.log("this is the post req", req.body)
      const game = await createGame(req.body);
      res.json(game);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

 //DELETE 
  games.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedGame = await deleteGame(id);
    if (deletedGame.id) {
      res.status(200).json(deletedGame);
    } else {
      res.status(404).json("Game not found");
    }
  });

// UPDATE
games.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedGame = await updateGame(id, req.body);
  res.status(200).json(updatedGame);
});

module.exports = games;