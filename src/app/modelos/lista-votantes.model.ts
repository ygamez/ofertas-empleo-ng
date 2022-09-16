export class ListaVotantes {
  constructor(public integrante: string[],
              public nombre: string,
              public descripcion: string,
              public estado: string,
              public creador: string,
              public status?: boolean,
              public _id?: string,
              public creadorn?: string,
              public entrar?: boolean,
              public salir?: boolean,
              public certificado?: boolean,
              public usar?: string[],
              public mesolicitan?: string[]
  ) {
  }

}
