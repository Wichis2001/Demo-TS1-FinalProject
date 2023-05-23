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
