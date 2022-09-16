import {ListaVotantes} from './lista-votantes.model';
import {Encuesta} from './encuesta';
export class Curso {
  constructor(
    public emitente: string | undefined,
    public recibidor: string,
    public encuesta: string,
    public listav: string,
    public id?: number,
    public nombreemitente?: string,
    public nombreencuesta?: string,
    public nombrelistav?: string
  ) {
    // code...
  }
}
