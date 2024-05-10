import { api } from 'src/boot/axios'
export default class FotoApi {
  download = {
    get: async function (id: number) {
      const { data } = await api.get(`/api/foto/download/${id}`)
      return data
    },
  }

  upload = {
    post: async function (id: number, file: File) {
      const { data } = await api.post(`/api/foto/upload/${id}`, file)
      return data
    },
  }
}
