const express = require("express")
const morgan = require("morgan");
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser")
const passport = require("passport")
const SpotifyStrategy = require('passport-spotify').Strategy;
require("dotenv").config()

const app = express()

const port = process.env.PORT || 3001

app.use(cors())

// body parsing middleware
app.use(bodyParser.json())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("dev"));

app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_ID

passport.use(
  new SpotifyStrategy(
    {
      clientID: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      callbackURL: "http://localhost:" + port + "/home",
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.env.REACT_APP_SPOTIFY_TOKEN = accessToken;
      console.log(process.env)
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

//get currently logged-in user info
app.get("/user", (req, res) => {
  console.log("**token**", process.env.TOKEN);
  res.send({ user: req.user });
});

app.get('/auth/spotify', passport.authenticate('spotify'));

//Get information based on selected scopes
app.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: [
      "streaming",
      "user-read-email",
      "user-read-private",
      "user-library-read",
      "user-library-modify",
      "playlist-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "playlist-read-collaborative",
      "playlist-modify-public"
    ],
    showDialog: true,
  })
);

// GET /auth/spotify/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   login page. Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/spotify/callback',
  passport.authenticate('spotify', {failureRedirect: '/login'}),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(port)

module.exports = app
