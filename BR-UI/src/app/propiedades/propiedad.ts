export interface Propiedad {
    id: number
    titulo: string
    precio: number
    imagen: string
    descripcion: string
    habitaciones: number
    wc: number
    estacionamiento: number
    // creado: Date
    vendedorId: number
    vendedor: string
}

export interface PropiedadDTO {
    id: number
    titulo: string
    precio: number
    imagen: string
    descripcion: string
    habitaciones: number
    wc: number
    estacionamiento: number
    vendedorId: number
    vendedorNombre: string
    vendedorApellido: string
}

export interface PropiedadCreacionDTO {
    titulo: string
    precio: number
    imagen: File
    descripcion: string
    habitaciones: number
    wc: number
    estacionamiento: number
    vendedorId: number
}