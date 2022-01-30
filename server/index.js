const express = require("express")
const morgan = require("morgan");
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser")
const passport = require("passport")
const SpotifyStrategy = require('passport-spotify').Strategy;
const { querystring } = require("@firebase/util");
const session = require('express-session')
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

app.use(
  session({secret: 'blueberry dog', resave: true, saveUninitialized: true})
);

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
const SPOTIFY_REDIRECT_URI = "http://localhost:3001/home"

// app.get("/login", (req, res => {
//   res.redirect("https://accounts.spotify.com/authorize?" +
//   querystring.stringify({
//     response_code: "code",
//     client_id: SPOTIFY_CLIENT_ID,
//     scope: [
//             "streaming",
//             "user-read-email",
//             "user-read-private",
//             "user-library-read",
//             "user-library-modify",
//             "playlist-read-private",
//             "user-read-playback-state",
//             "user-modify-playback-state",
//             "playlist-read-collaborative",
//             "playlist-modify-public"
//           ],
//     redirect_uri: SPOTIFY_REDIRECT_URI
//   }))
// }))


passport.use(
  new SpotifyStrategy(
    {
      clientID: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      callbackURL: SPOTIFY_REDIRECT_URI,
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
  res.send({ user: req.user });
});

app.get("/token", (req, res) => {
  res.send(process.env.REACT_APP_SPOTIFY_TOKEN);
});

// app.get("/auth/spotify", passport.authenticate('spotify'));

// Get information based on selected scopes
app.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: [
      "streaming",
      "user-read-email",
      "user-read-private",
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
app.get('/auth/spotify/callback',
  passport.authenticate('spotify',
  // {failureRedirect: '/login'}
  ),
  function (req, res) {
    res.redirect('/home');
  }
);

app.get('/auth/spotify/logout', function (req, res) {
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

app.listen(port, () => console.log(`Mixing it up on port ${port}`))

// require("dotenv").config()
// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const SpotifyWebApi = require("spotify-web-api-node")

// const app = express()
// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
// const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
// const SPOTIFY_REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI

// app.post("/refresh", (req, res) => {
//   const refreshToken = req.body.refreshToken
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: SPOTIFY_REDIRECT_URI,
//     clientId: SPOTIFY_CLIENT_ID,
//     clientSecret: SPOTIFY_CLIENT_SECRET,
//     refreshToken,
//   })

//   spotifyApi
//     .refreshAccessToken()
//     .then(data => {
//       res.json({
//         accessToken: data.body.accessToken,
//         expiresIn: data.body.expiresIn,
//       })
//     })
//     .catch(err => {
//       console.log(err)
//       res.sendStatus(400)
//     })
// })

// app.post("/login", (req, res) => {
//   console.log(process.env)
//   const code = req.body.code
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: SPOTIFY_REDIRECT_URI,
//     clientId: SPOTIFY_CLIENT_ID,
//     clientSecret: SPOTIFY_CLIENT_SECRET,
//   })

//   spotifyApi
//     .authorizationCodeGrant(code)
//     .then(data => {
//       res.json({
//         accessToken: data.body.access_token,
//         refreshToken: data.body.refresh_token,
//         expiresIn: data.body.expires_in,
//       })
//     })
//     .catch(err => {
//       res.sendStatus(400)
//     })
// })

// app.listen(3001, () => console.log(`Mixing it up on port 3001`))
