import {PublicacaoModel} from "./publicacao.model";
import {UsuarioModel} from "./usuario.model";


export interface ComentarioModel {
  id: number,
  publicacao: PublicacaoModel,
  usuario: UsuarioModel,
  dtCriacao: Date,
  comentarios: string
}



