export class Usuario {

  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public username: string,
    public password: string,
    public email: string,
    public tipousuario: string,
    public token: string,
    public fechaexpiracion: number,
    public fecharegistro?: string,

  ) {}
}

