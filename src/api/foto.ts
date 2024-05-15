import { api } from 'src/boot/axios'
import type { Foto } from 'src/types/foto'
import type { ResponseWrapper } from 'src/types/responseWrapper'

export type FotoDownloadResponse = {
  byteArray: string
  description: string
  filename: string
  inputStream: any
  open: boolean
  readable: boolean
  uri: string
  url: string
}

export type FotoUploadResponse = ResponseWrapper<Foto>

export default class FotoApi {
  download = {
    get: async function (id: number) {
      const { data } = await api.get<FotoDownloadResponse>(
        `/api/foto/download/${id}`,
      )
      return data
    },
  }

  upload = {
    post: async function (contatoId: number, file: FormData) {
      const { data } = await api.post<FotoUploadResponse>(
        `/api/foto/upload/${contatoId}`,
        { file },
      )
      return data
    },
  }
}
