export interface Game {
  nameGame:  string;
  passwrd:   string;
  descriptn: string;
  idModel:   Models;
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
