import { api } from 'src/boot/axios'
export default class PessoaApi {
  buscar = {
    get: async function (id: number) {
      const { data } = await api.get(`/api/pessoa/buscar/${id}`)
      return data
    },
  }

  pesquisar = {
    post: async function (params: any) {
      const { data } = await api.post('pessoa/pesquisar', params)
      return data
    },
  }

  remover = {
    delete: async function (id: number) {
      const { data } = await api.delete(`pessoa/remover/${id}`)
      return data
    },
  }

  salvar = {
    post: async function (params: any) {
      const { data } = await api.post('pessoa/salvar', params)
      return data
    },
  }
}
