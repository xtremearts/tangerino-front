import {UsuarioModel} from "./usuario.model";
import {ComentarioModel} from "./comentario.model";


export interface PublicacaoModel {
  id: number
  usuario: UsuarioModel
  dtCriacao: Date
  descricao: string
}

export class PublicacaoRetornoModel {
  id?: number;
  usuario?: UsuarioModel;
  dtCriacao?: Date;
  descricao?: string;
  imagem?: any;
  comentarios?: ComentarioModel[]

}

