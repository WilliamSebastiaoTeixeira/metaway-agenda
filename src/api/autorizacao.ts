import { api } from 'src/boot/axios'
import { RoleUsuarioEnum } from './usuario'

export interface LoginRequest {
  password: string
  username: string
}

export interface LoginResponse {
  accessToken: string
  id: number
  tipos: RoleUsuarioEnum[]
  tokenType: string
  username: string
}

export default class AutorizacaoApi {
  login = {
    post: async function (request: LoginRequest) {
      const { data } = await api.post<LoginResponse>('auth/login', request)
      return data
    },
  }
}
