export interface Game {
  nameGame:  string;
  passwrd?:   string;
  descriptn: string;
  idModel:   string;
  idUser:    string;
  words?:    string[];
  scores:    number[];
  quesAns?:  QuesAn[];
}

export interface QuesAn {
  question: string;
  answers:  Answer[];
}
export interface Answer {
  answer: string;
  value:  string;
}

export enum Models {
  ScrambleGame = 'M1',
  PreguntadosGame = 'M2'
}

export interface GameResponse {
  idGame:  string;
}

export interface ScoreResponse {
  score:   string;
}


export interface Games {
  _id:       string;
  idGame:    string;
  nameGame:  string;
  passwrd:   null;
  descriptn: string;
  idModel:   string;
}

export interface Reporte {
  nameGame: string;
  times?:   number;
  users?:   number;
}
