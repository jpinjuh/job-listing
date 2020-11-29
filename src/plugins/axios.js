'use strict'

import Vue from 'vue'
import axios from 'axios'

let config = {
  headers: {
    Accept: 'application/json'
  }
}

const baseUrl = process.env.VUE_APP_JOBS_API_URL
const _axios = axios.create(config)

_axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);

_axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
);

Plugin.install = (Vue, options) => {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = true
axios.defaults.headers.accept = 'application/json'

export default Plugin
