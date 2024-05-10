import AutorizacaoApi from './autorizacao'
import ContatoApi from './contato'
import FavoritoApi from './favorito'
import FotoApi from './foto'
import PessoaApi from './pessoa'
import UsuarioApi from './usuario'

export default {
  autorizacao: new AutorizacaoApi(),
  contato: new ContatoApi(),
  favorito: new FavoritoApi(),
  foto: new FotoApi(),
  pessoa: new PessoaApi(),
  usuario: new UsuarioApi(),
}
