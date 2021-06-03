export interface Agricultor {
    id: string,
    codigo: string,
    cedula: string,
    nombre: string,
    fechaNacimiento: Date,
    genero: string,
    estadoCivil: string,
    nivelEducacion: string,
    celulares: string[],
    telefono: string,
    isDiscapacitado: string,
    tecnico: string,
    fechaVisita: Date
}