import { api } from 'src/boot/axios'
import { RoleUsuarioEnum } from 'src/types/enum/RoleUsuario'

import type { ResponseWrapper } from 'src/types/responseWrapper'
import type { Usuario } from 'src/types/usuario'

export type UsuariosBuscarResponse = ResponseWrapper<{
  usuario: Usuario
  tipos: RoleUsuarioEnum[]
}>

export default class UsuarioApi {
  alterarSenha = {
    post: async function (params: any) {
      const { data } = await api.post('usuario/alterarSenha', params)
      return data
    },
  }

  atualizar = {
    put: async function (params: any) {
      const { data } = await api.put('usuario/atualizar', params)
      return data
    },
  }

  buscar = {
    get: async function (id: number) {
      const { data } = await api.get<UsuariosBuscarResponse>(
        `/api/usuario/buscar/${id}`,
      )
      return data
    },
  }

  pesquisar = {
    post: async function (params: any) {
      const { data } = await api.post('usuario/pesquisar', params)
      return data
    },
  }

  salvar = {
    post: async function (params: any) {
      const { data } = await api.post('usuario/salvar', params)
      return data
    },
  }
}
