const playlistModel = require("../models/playlist.model.js");

const addSongToPlaylist = (song) => {
  playlistModel.addSong(song);
};

const getPlaylist = () => {
  return playlistModel.playlist();
};

const getSong = (title) => {
  const song = playlistModel.findSong(title);
  if (song == null) {
    throw {
      type: "not-found",
      message: "Tidak dapat menemukan lagu",
    };
  }
  return song;
};

const getMostPlayedSong = () => {
  const songs = playlistModel.sortMostPlayedSongs();
  if (songs == null) {
    throw {
      type: "not-found",
      message: "Tidak ada lagu di database kami",
    };
  }
  return songs;
};

module.exports = {
  addSongToPlaylist,
  getPlaylist,
  getSong,
  getMostPlayedSong,
};
