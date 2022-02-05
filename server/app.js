const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
var cors = require('cors');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

require("dotenv").config()
const SpotifyWebApi = require('spotify-web-api-node')

module.exports = app

//if I am not in my production environment, I want to access the secrets.js file inside of my local machine (each dev should have one!)
//other environments aside from production include development, test, etc.

// const STRIPE_API_KEY = process.env.STRIPE_API_KEY

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
//app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.static(path.join(__dirname, '..', 'public')))
   .use(cors())
   .use(cookieParser());

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
const SPOTIFY_REDIRECT_URI_CARDIO = process.env.REACT_APP_SPOTIFY_REDIRECT_URI_CARDIO
const SPOTIFY_REDIRECT_URI_STRENGTH = process.env.REACT_APP_SPOTIFY_REDIRECT_URI_STRENGTH

app.post('/strengthlogin', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: SPOTIFY_REDIRECT_URI_STRENGTH,
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    console.log(data.body.access_token)
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  }).catch((err)=> {
    console.log(err)
  res.sendStatus(400)
})
})

app.post("/strengthrefresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: SPOTIFY_REDIRECT_URI_STRENGTH,
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    refreshToken
  })

  spotifyApi.refreshAccessToken()
  .then(
    (data) => {
      console.log('The access token has been refreshed');
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    }).catch(() => {
      res.sendStatus(400)
    })
})

app.post('/cardiologin', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: SPOTIFY_REDIRECT_URI_CARDIO,
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    console.log(data.body.access_token)
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  }).catch((err)=> {
    console.log(err)
  res.sendStatus(400)
})
})

app.post("/cardiorefresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: SPOTIFY_REDIRECT_URI_CARDIO,
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    refreshToken
  })

  spotifyApi.refreshAccessToken()
  .then(
    (data) => {
      console.log('The access token has been refreshed');
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    }).catch(() => {
      res.sendStatus(400)
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
