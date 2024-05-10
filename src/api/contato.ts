import { api } from 'src/boot/axios'

export default class ContatoApi {
  listar = {
    get: async function (pessoaId: number) {
      const { data } = await api.get(`listar/${pessoaId}`)
      return data
    },
  }

  pesquisar = {
    post: async function (params: any) {
      const { data } = await api.post('contato/post', params)
      return data
    },
  }

  remover = {
    delete: async function (id: number) {
      const { data } = await api.delete(`/api/contato/remover/${id}`)
      return data
    },
  }

  salvar = {
    post: async function (params: any) {
      const { data } = await api.post('contato/salvar', params)
      return data
    },
  }
}
