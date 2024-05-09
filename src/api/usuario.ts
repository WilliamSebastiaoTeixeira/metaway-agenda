export enum RoleUsuarioEnum {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_USER = 'ROLE_USER',
}

export interface Usuario {
  cpf: string
  dataNascimento: string
  email: string
  id: number
  nome: string
  password: string
  telefone: string
  username: string
}
