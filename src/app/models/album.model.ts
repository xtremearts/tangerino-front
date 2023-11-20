import {UsuarioModel} from "./usuario.model";


export interface AlbumModel {
  id?: number;
  usuario?: UsuarioModel;
  dtCriacao?: Date;
  imagem?: any;
}


