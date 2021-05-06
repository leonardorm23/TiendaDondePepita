export class Usuario {
  constructor(
    public _id: String,
    public nombres: String,
    public apellidos: String,
    public edad: String,
    public correo: String,
    public pass: String,
    public rol: String,
    public getToken: boolean
  ) {}
}
