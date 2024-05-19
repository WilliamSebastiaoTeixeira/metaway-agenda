import { api } from 'src/boot/axios'
import type { Contato } from 'src/types/contato'
import type { ResponseWrapper } from 'src/types/responseWrapper'

export type ContatoListarResponse = Contato[]

export type ContatoPesquisarRequest = {
  termo: string
}

export type ContatoPesquisarResponse = Contato[]

export type ContatoRemoverResponse = ResponseWrapper<boolean>

export type ContatoSalvarRequest = Contato
export type ContatoSalvarResponse = Contato

export default class ContatoApi {
  listar = {
    get: async function (pessoaId: number) {
      const { data } = await api.get<ContatoListarResponse>(
        `contato/listar/${pessoaId}`,
      )
      return data
    },
  }

  pesquisar = {
    post: async function (params: ContatoPesquisarRequest) {
      const { data } = await api.post<ContatoPesquisarResponse>(
        'contato/pesquisar',
        params,
      )
      return data
    },
  }

  remover = {
    delete: async function (id: number) {
      const { data } = await api.delete<ContatoRemoverResponse>(
        `contato/remover/${id}`,
      )
      return data
    },
  }

  salvar = {
    post: async function (params: ContatoSalvarRequest) {
      const { data } = await api.post<ContatoSalvarResponse>(
        'contato/salvar',
        params,
      )
      return data
    },
  }
}
