import { defineStore } from 'pinia'
import { RoleUsuarioEnum } from 'src/types/enum/RoleUsuario'
import { ref } from 'vue'

export interface UsuarioStoreInfo {
  id: number
  username: string
  tipos: RoleUsuarioEnum[]
}

const accessTokenFromStorage: string | undefined =
  localStorage.getItem('accessToken') ?? undefined

const tokenTypeFromStorage: string | undefined =
  localStorage.getItem('tokenType') ?? undefined

const usuarioFromStoreString = localStorage.getItem('usuario')
const usuarioFromStorage: UsuarioStoreInfo | undefined = usuarioFromStoreString
  ? JSON.parse(usuarioFromStoreString)
  : undefined

export const useAuthorizationStore = defineStore('authorization', () => {
  const accessToken = ref(accessTokenFromStorage)
  const tokenType = ref(tokenTypeFromStorage)
  const usuario = ref(usuarioFromStorage)

  function setAcessToken(incomingToken: string | undefined): void {
    if (incomingToken) localStorage.setItem('accessToken', incomingToken)
    accessToken.value = incomingToken
  }

  function setTokenType(incomingToken: string | undefined): void {
    if (incomingToken) localStorage.setItem('tokenType', incomingToken)
    tokenType.value = incomingToken
  }

  function setUsuario(UsuarioInfo: UsuarioStoreInfo | undefined): void {
    if (UsuarioInfo)
      localStorage.setItem('usuario', JSON.stringify(UsuarioInfo))
    usuario.value = UsuarioInfo
  }

  function logout(): void {
    localStorage.removeItem('usuario')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('tokenType')
    setUsuario(undefined)
    setAcessToken(undefined)
    setTokenType(undefined)
  }

  return {
    accessToken,
    tokenType,
    usuario,
    logout,
    setAcessToken,
    setTokenType,
    setUsuario,
  }
})
