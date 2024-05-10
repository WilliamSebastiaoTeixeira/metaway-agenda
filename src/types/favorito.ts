import { Pessoa } from './pessoa'

export interface FavoritoPesquisarResponse {
  email: string
  id: number
  pessoa: Pessoa
  privado: true
  tag: string
  telefone: string
  tipoContato: string
  usuario: {
    cpf: string
    dataNascimento: string
    email: string
    id: number
    nome: string
    password: string
    telefone: string
    username: string
  }
}
