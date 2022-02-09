import { useState, useEffect } from "react"
import axios from "axios"

// const port = process.env.PORT || "http://localhost:3000"
//const port = process.env.NODE_ENV === 'production' ? 'https://sweatdeck-test.herokuapp.com' : 'http://localhost:3000';
const port =  /localhost/.test(window.location.href) ? 'http://localhost:3000/api' : 'https://sweatdeck.herokuapp.com/api'

const useAuthCardio = (code) =>  {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
  };

  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios
      .post(`${port}/cardiologin`, {code}, axiosConfig)
      .then(res => {
        // console.log(res.data)
        //console.log(res.status)
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, "/")
      })
      .catch(() => {
        // window.location = "/failed-login"
        console.log("failed")
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post(`${port}/cardiorefresh`, {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          window.location = "/failed-refresh"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}

export default useAuthCardio

