import { Endereco } from './endereco'
import { Foto } from './foto'

export interface Pessoa {
  cpf: string
  endereco: Omit<Endereco, 'id'> & { id?: number }
  foto: Foto | null
  id: number
  nome: string
}
