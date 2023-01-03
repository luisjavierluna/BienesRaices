export interface Vendedor {
    id: number
    nombre: string
    apellido: string
    telefono: string
    propiedadId: number
    propiedadTitulo: string
}

export interface VendedorDTO {
    id: number
    nombre: string
    apellido: string
    telefono: string
}

export interface VendedorCreacionDTO {
    nombre: string
    apellido: string
    telefono: string
}
