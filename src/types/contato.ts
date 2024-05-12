import { TipoContatoEnum } from './enum/tipoContato'
import { Pessoa } from './pessoa'
import { Usuario } from './usuario'

export interface Contato {
  email: string
  id: number
  pessoa: Pessoa
  privado: boolean
  tag: string
  telefone: string
  tipoContato: TipoContatoEnum
  usuario: Usuario
}
