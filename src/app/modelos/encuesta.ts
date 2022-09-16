import {ListaVotantes} from './lista-votantes.model';
import {Pregunta} from './pregunta';
import DateTimeFormat = Intl.DateTimeFormat;
import {Respuesta} from './respuesta';

export class Encuesta {
  constructor(
      public preguntas: Pregunta[],
      public titulo: string,
      public descripcion: string,
      public tipo: string,
      public estado: string,
      public usuario: string,
      public tema: string,
      public start_at: Date,
      public closed_at: Date,
      public listavotantes: string[],
      public image?: ArrayBuffer | string,
      public status?: boolean,
      public votantes?: string[],
      public _id?: string,
      public listavotantespedidos?: string[],
      public respuestas?: Respuesta[],
      public imagenTemp3?: ArrayBuffer | string,
      public _idi?: string,
      public cosa?: string,
      public listavotantess?: string[] | ListaVotantes[],
      public fav?: boolean,
      public fechai?: string,
      public fechaf?: string,
      public weno?: string,
      public vot?: string,
      public enlista?: string[],
      public total?: number,
      public nombre?: string,
      public salir?: boolean,
      public entrar?: boolean,
      public listo?: boolean,
      public certificado?: boolean,
      public participante?: boolean,
      public usuarionombre?: boolean
  ) {
  }
}
