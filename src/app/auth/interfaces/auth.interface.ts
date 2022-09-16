export interface AuthResponse{
    ok: boolean;
    id?: string;
    nombre?:  string;
    email?: string;
    token?: string;
    refreshToken?: string;
    message?: string;
}

export interface UsuarioRequest {
    id: string;
    name: string;
    email: string;
}