export interface AuthReponse {
  userTemp?: Usuario;
  ok:       boolean
  msg?:     string;

}

export interface Usuario {
  idUser?:  string;
  nickname: string;
  name:     string;
  lastname: string;
  password: string;
  rol:      Role;
  _id?:     string;
}

export enum Role {
  admin        = 'admin',
  maestro      = 'maestro',
  estudiante   = 'estudiante'
}
