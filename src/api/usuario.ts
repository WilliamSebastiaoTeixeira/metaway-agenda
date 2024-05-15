import { api } from 'src/boot/axios'
import { RoleUsuarioEnum } from 'src/types/enum/RoleUsuario'

import type { ResponseWrapper } from 'src/types/responseWrapper'
import type { Usuario } from 'src/types/usuario'

export type UsuarioAlterarSenhaRequest = {
  newPassword: string
  password: string
  username: string
}

export type UsuarioAlterarSenhaResponse = ResponseWrapper<Usuario>

export type UsuarioAtualizarRequest = Usuario

export type UsuarioAtualizarResponse = ResponseWrapper<Usuario>

export type UsuariosBuscarResponse = ResponseWrapper<{
  usuario: Usuario
  tipos: RoleUsuarioEnum[]
}>

export type UsuarioPesquisarRequest = {
  termo: string
}

export type UsuarioPesquisarResponse = Usuario[]

export type UsuarioSalvarResquest = {
  tipos: RoleUsuarioEnum[]
  usuario: Usuario
}

export type UsuarioSalvarResponse = ResponseWrapper<{
  tipos: RoleUsuarioEnum[]
  usuario: Usuario
}>

export default class UsuarioApi {
  alterarSenha = {
    post: async function (params: UsuarioAlterarSenhaRequest) {
      const { data } = await api.post<UsuarioAlterarSenhaResponse>(
        'usuario/alterarSenha',
        params,
      )
      return data
    },
  }

  atualizar = {
    put: async function (params: UsuarioAtualizarRequest) {
      const { data } = await api.put<UsuarioAtualizarResponse>(
        'usuario/atualizar',
        params,
      )
      return data
    },
  }

  buscar = {
    get: async function (id: number) {
      const { data } = await api.get<UsuariosBuscarResponse>(
        `usuario/buscar/${id}`,
      )
      return data
    },
  }

  pesquisar = {
    post: async function (params: UsuarioPesquisarRequest) {
      const { data } = await api.post<UsuarioPesquisarResponse>(
        'usuario/pesquisar',
        params,
      )
      return data
    },
  }

  salvar = {
    post: async function (params: UsuarioSalvarResquest) {
      const { data } = await api.post<UsuarioSalvarResponse>(
        'usuario/salvar',
        params,
      )
      return data
    },
  }
}
