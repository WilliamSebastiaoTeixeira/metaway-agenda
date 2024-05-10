import { Endereco } from './endereco'
import { Foto } from './foto'

export interface Pessoa {
  cpf: string
  endereco: Endereco
  foto: Foto
  id: number
  nome: string
}
