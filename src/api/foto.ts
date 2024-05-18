import { Buffer } from 'buffer'
import { api } from 'src/boot/axios'
import type { Foto } from 'src/types/foto'
import type { ResponseWrapper } from 'src/types/responseWrapper'

export type FotoUploadResponse = ResponseWrapper<Foto>

export default class FotoApi {
  download = {
    get: async function (id: number, foto: Foto) {
      const { data } = await api.get<string>(`foto/download/${id}`, {
        responseType: 'arraybuffer',
      })
      const base64 = Buffer.from(data, 'base64').toString('base64')
      return `data:${foto.type};base64,${base64}`
    },
  }

  upload = {
    post: async function (contatoId: number, file: FormData) {
      const { data } = await api.post<FotoUploadResponse>(
        `foto/upload/${contatoId}`,
        { file },
      )
      return data
    },
  }
}
