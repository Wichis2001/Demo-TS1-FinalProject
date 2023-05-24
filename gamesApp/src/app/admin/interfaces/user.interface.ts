export interface UsuarioGenerado {
  idUser?:  string;
  nickname: string;
  name:     string;
  lastname: string;
  password: string;
  rol?:      string;
  _id?:     string;
}

export interface NotificacionReporte {
  title: string;
  descriptn: string;
  rol: RoleNotificacion
}

export interface NotificationResponse {
  status: string;
}
export enum RoleNotificacion{
  maestro      = 'maestro',
  estudiante   = 'estudiante'
}
