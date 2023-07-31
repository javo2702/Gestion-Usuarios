export interface User{

}
export interface UserWithToken{
    token:string
}

export interface TokenInterface{
    token:string
}
export interface UserInfo{
    idUsuario: number,
    usuario: string,
    clave: string,
    dni: string,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    codArea: string,
    area: string,
    cargo: string,
    foto?: string | null
}