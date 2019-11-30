export class Curso {

  constructor(
    public id: number,
    public nombre: string,
    public area_conocimiento: string,
    public anno_academico: string,
    public profesor_principal: string,
    public tipo_curso: string,
    public correo_contaco: string,
    public otro_profesor: string,
    public descripcion: string,
    public estado: string,
    public updatedAt: string,
    public createdAt: string
  ) {
    // code...
  }
}
