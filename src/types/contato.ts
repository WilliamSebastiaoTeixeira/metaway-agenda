import { TipoContatoEnum } from './enum/tipoContato'
import { Pessoa } from './pessoa'
import { Usuario } from './usuario'

export interface Contato {
  email: string | null
  id: number
  pessoa: Pessoa | null
  privado: boolean
  tag: string
  telefone: string
  tipoContato: TipoContatoEnum
  usuario: Partial<Usuario>
}
