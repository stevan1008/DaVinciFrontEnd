export class Data {
    constructor(id = "", Nombres = "", Apellidos = "", Telefonos = "", Direccion = "", createdAt = "", updatedAt = "") {
        this.id = id;
        this.Nombres = Nombres;
        this.Apellidos = Apellidos;
        this.Telefonos = Telefonos;
        this.Direccion = Direccion;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    id: string;
    Nombres: string;
    Apellidos: string;
    Telefonos: string;
    Direccion: string;
    createdAt: string;
    updatedAt: string;
}