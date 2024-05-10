import { api } from 'src/boot/axios'

export default class ContatoApi {
  listar = {
    get: async function (pessoaId: string) {
      const { data } = await api.get(`listar/${pessoaId}`)
      return data
    },
  }
}
