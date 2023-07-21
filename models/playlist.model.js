let songs = [
  {
    title: "Cupid",
    artist: "FIFTY FIFTY",
    url: "https://open.spotify.com/intl-id/track/7FbrGaHYVDmfr7KoLIZnQ7?si=3b66831eecc54517",
    count: 1,
  },
  {
    title: "Introduce me a good person",
    artist: "JOY",
    url: "https://open.spotify.com/intl-id/track/2OAEKEb0778gsDaCef7MLI?si=bb2022ab7a694b9a",
    count: 2,
  },
  {
    title: "Say Yes",
    artist: "Loco, Punch",
    url: "https://open.spotify.com/intl-id/track/27zrFrtUtWl2urlvjOn5xc?si=dbcc00c1dbc7441f",
    count: 3,
  },
];

const addSong = (song) => {
  songs.push(song);
};

const playlist = () => {
  return songs;
};
const findSong = (title) => {
  return songs.find((song) => {
    song.title === title;
  });
};
const sortMostPlayedSongs = () => {
  const sortedSongs = [...songs];
  return sortedSongs.sort((a, b) => b.count - a.count);
};

module.exports = { addSong, playlist, findSong, sortMostPlayedSongs };
