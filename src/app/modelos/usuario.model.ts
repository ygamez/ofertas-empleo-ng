export class Usuario {

  constructor(
    public id: number,
    public nombre: string,
    public email: string,
    public password: string,
    public role: string,
    public imagen: string,
    public status: string,
    public createdAt: string,
    public updatedAt: string,
    public gettoken: any		// gettoken no está en la bd
  ) {
    // code...
  }
}
