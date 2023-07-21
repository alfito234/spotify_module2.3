const express = require("express");
const playlistController = require("../controllers/playlist.controller");

const router = express.Router();

router.get("/", playlistController.indexPage);
router.get("/form", playlistController.addPage);
router.post("/add", playlistController.addSong);

module.exports = router;
