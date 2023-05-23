export interface Juego {
  _id:       string;
  idGame:    string;
  nameGame:  string;
  passwrd:   string;
  descriptn: string;
  idModel:   string;
}

export interface Score {
  user: string;
  score: number;
}

export interface Comentario {
  _id?:   string;
  idUser: string;
  idGame: string;
  information: string;
}

export interface ComentarioUsuario {
  nameUser: string;
  comment: string;
}

export interface ScoreAgregar {
  idUser?:   string;
  idGame?:   string;
  score?:    number;
}

export interface Scramble {
  word: string;
}

export interface ScorePlay {
  score: number;
}
