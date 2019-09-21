import axios from 'axios'
import queryString from 'query-string'
import { API_OAUTH, APP_ID, APP_PASSWORD } from '../constants/oauth.yandex'

const auth = {
  getTokens: code => {
    const body = {
      grant_type: 'authorization_code',
      client_id: APP_ID,
      client_secret: APP_PASSWORD,
      code,
    }
    return axios.post(`${API_OAUTH}/token`, queryString.stringify(body), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  },
  refreshToken: refreshToken => {
    return axios.post(`${API_OAUTH}/token`, {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    })
  },
}

export default auth
