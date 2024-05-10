import { api } from 'src/boot/axios'
export default class FavoritoApi {
  pesquisar = {
    get: async function () {
      const { data } = await api.get('favorito/pesquisar')
      return data
    },
  }

  remover = {
    delete: async function (contatoId: string) {
      const { data } = await api.delete(`/api/favorito/remover/${contatoId}`)
      return data
    },
  }

  salvar = {
    post: async function (params: any) {
      const { data } = await api.post('favorito/salvar', params)
      return data
    },
  }
}
