import { api } from 'src/boot/axios'

import type { Contato } from 'src/types/contato'
import type { ResponseWrapper } from 'src/types/responseWrapper'

export type FavoritoPesquisarResponse = Contato[]

export type FavoritoRemoverResponse = ResponseWrapper<boolean>

export type FavoritoSalvarRequest = Contato

export type FavoritoSalvarResponse = ResponseWrapper<boolean>

export default class FavoritoApi {
  pesquisar = {
    get: async function () {
      const { data } =
        await api.get<FavoritoPesquisarResponse>('favorito/pesquisar')
      return data
    },
  }

  remover = {
    delete: async function (contatoId: string) {
      const { data } = await api.delete<FavoritoRemoverResponse>(
        `/api/favorito/remover/${contatoId}`,
      )
      return data
    },
  }

  salvar = {
    post: async function (params: FavoritoSalvarRequest) {
      const { data } = await api.post<FavoritoSalvarResponse>(
        'favorito/salvar',
        params,
      )
      return data
    },
  }
}
