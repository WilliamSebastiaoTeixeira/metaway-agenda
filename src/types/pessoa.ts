import type { Endereco } from './endereco'
import type { Foto } from './foto'

export type EnderecoWithoutId = Omit<Endereco, 'id'> & { id?: number }
export interface Pessoa {
  cpf: string
  endereco: EnderecoWithoutId
  foto: Foto | null
  id: number
  nome: string
}
