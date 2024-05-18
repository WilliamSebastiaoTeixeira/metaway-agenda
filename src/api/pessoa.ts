import { api } from 'src/boot/axios'
import type { Pessoa } from 'src/types/pessoa'

import type { ResponseWrapper } from 'src/types/responseWrapper'

export type PessoaBuscarResponse = ResponseWrapper<Pessoa>

export type PessoaPesquisarResquest = {
  nome: string
}

export type PessoaPesquisarResponse = Pessoa[]

export type PessoaRemoverResponse = ResponseWrapper<boolean>

export type PessoaSalvarRequest = Omit<Pessoa, 'id'> & {
  id?: number
}

export type PessoaSalvarResponse = ResponseWrapper<Pessoa>

export default class PessoaApi {
  buscar = {
    get: async function (id: number) {
      const { data } = await api.get<PessoaBuscarResponse>(
        `/api/pessoa/buscar/${id}`,
      )
      return data
    },
  }

  pesquisar = {
    post: async function (params: PessoaPesquisarResquest) {
      const { data } = await api.post<PessoaPesquisarResponse>(
        'pessoa/pesquisar',
        params,
      )
      return data
    },
  }

  remover = {
    delete: async function (id: number) {
      const { data } = await api.delete<PessoaRemoverResponse>(
        `pessoa/remover/${id}`,
      )
      return data
    },
  }

  salvar = {
    post: async function (params: PessoaSalvarRequest) {
      const { data } = await api.post<PessoaSalvarResponse>(
        'pessoa/salvar',
        params,
      )
      return data
    },
  }
}
