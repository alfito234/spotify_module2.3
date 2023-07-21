const playlistService = require("../services/playlist.service");

const indexPage = (req, res) => {
  const playlist = playlistService.getPlaylist();
  const popular = playlistService.getMostPlayedSong();
  res.render("index", { playlist, popular });
};

const addPage = (req, res) => {
  res.render("form");
};

const addSong = (req, res) => {
  const newSong = {
    title: req.body.title,
    artist: req.body.artist,
    url: req.body.url,
    count: 0,
  };
  playlistService.addSongToPlaylist(newSong);
  res.redirect("/");
};

const playlistController = () => {
  return playlistService.getPlaylist();
};
const getSongByTitle = (title) => {
  try {
    const song = playlistService.getSong(title);
    return {
      status: "success",
      song,
    };
  } catch (error) {
    throw error;
  }
};
const playSong = (title) => {
  try {
    const song = playlistService.getSong(title);
    song.count++;
    return {
      status: "success",
      song,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  indexPage,
  addPage,
  addSong,
  playlistController,
  getSongByTitle,
  playSong,
};
