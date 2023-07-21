const express = require("express");
const app = express();
const port = 3000;
const playlistRoute = require("./routes/playlist.routes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/", playlistRoute);

// const playlist = [
//   {
//     title: "Cupid",
//     artist: "FIFTY FIFTY",
//     url: "https://open.spotify.com/intl-id/track/7FbrGaHYVDmfr7KoLIZnQ7?si=3b66831eecc54517",
//   },
//   {
//     title: "Introduce me a good person",
//     artist: "JOY",
//     url: "https://open.spotify.com/intl-id/track/2OAEKEb0778gsDaCef7MLI?si=bb2022ab7a694b9a",
//   },
//   {
//     title: "Say Yes",
//     artist: "Loco, Punch",
//     url: "https://open.spotify.com/intl-id/track/27zrFrtUtWl2urlvjOn5xc?si=dbcc00c1dbc7441f",
//   },
// ];

// app.get("/", (req, res) => {
//   res.render("index.ejs", { playlist });
// });
// app.get("/form", (req, res) => {
//   res.render("form.ejs");
// });
// app.post("/add", (req, res) => {
//   const newSong = ({ title, artist, url } = req.body);
//   playlist.push({ title, artist, url });
//   res.status(201);
//   res.send(newSong);
//   res.redirect("/");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
