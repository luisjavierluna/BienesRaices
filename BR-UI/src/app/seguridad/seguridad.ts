export interface CredencialesUsuarioRegistro {
    name: string
    email: string
    password: string
}

export interface CredencialesUsuarioLogin {
    email: string
    password: string
}

export interface RespuestaAutenticacion {
    token: string
    expiracion: Date
}