import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance } from 'axios'
import { Notify } from 'quasar'
import { useAuthorizationStore } from 'src/stores/authorization'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    $api: AxiosInstance
  }
}

const api = axios.create({
  baseURL: 'https://demometaway.vps-kinghost.net:8485/api/',
})

api.defaults.timeout = 300000

api.interceptors.request.use((config) => {
  const auth = useAuthorizationStore()

  if (auth.accessToken && auth.tokenType && config.headers) {
    config.headers.Authorization = `${auth.tokenType} ${auth.accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  async (error) => {
    if (!error.response) {
      Notify.create({
        message: 'Nosso serviço está temporariamente indisponível',
        position: 'bottom',
        type: 'negative',
      })
      return Promise.reject(error)
    }

    if (error.request.responseType === 'blob') {
      const dataErrorParsed = JSON.parse(await error.response.data.text())
      error.response.data = dataErrorParsed
    }

    switch (error.response.status) {
      case 500:
        Notify.create({
          message: 'Um erro inesperado ocorreu. Tente novamente',
          position: 'bottom',
          type: 'negative',
        })
        break
      case 400:
      case 404:
        Notify.create({
          message:
            error.response.data?.message ||
            'Um erro inesperado ocorreu. Tente novamente',
          position: 'bottom',
          type: 'negative',
        })
        break
      case 502:
        Notify.create({
          message: 'Nosso serviço está temporariamente indisponível',
          position: 'bottom',
          type: 'negative',
        })
        break
      case 401:
      case 403:
        Notify.create({
          message:
            error.response.data?.message ||
            'Você não tem permissão para realizar a ação solicitada',
          position: 'bottom',
          type: 'negative',
        })
        break
    }

    return Promise.reject(error)
  },
)

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
