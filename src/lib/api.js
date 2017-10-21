import axios from 'axios'

import {getToken} from './auth'

// const BASE_URL = 'http://localhost:3000'
const BASE_URL = 'http://dev-api.tabletop.menu'
const CLIENT_ID = '02ba75a4766075f6d6d16d86165eee10'

export {getFoodGroupData, getFoodItemData, googleLogin, facebookLogin, getAddress}

function getFoodGroupData () {
  const url = `${BASE_URL}/api/menu/groups/${CLIENT_ID}`
  return axios.get(url).then(response => response.data)
}

function getFoodItemData (id) {
  const url = `${BASE_URL}/api/menu/items/${id}`
  return axios.get(url).then(response => response.data)
}

function googleLogin (token) {
  const url = `${BASE_URL}/oauth/googleplus/token`
  return axios.post(url, { id_token: token.idToken, access_token: token.accessToken }).then(response => response.data)
}

function facebookLogin (token) {
  const url = `${BASE_URL}/oauth/facebook/token`
  return axios.post(url, { access_token: token.accessToken }).then(response => response.data)
}

function getAddress () {
  const url = `${BASE_URL}/oauth/profile`
  return axios.get(url, {headers: {'x-access-token': getToken()}}).then(response => response.data)
}
