import {UsuarioModel} from "./usuario.model";


export interface PublicacaoModel {
  id: number
  usuario: UsuarioModel
  dtCriacao: Date
  descricao: string
}

export interface PublicacaoRetornoModel {
  id: number
  usuario: UsuarioModel
  dtCriacao: Date
  descricao: string
  imagem: any
}

