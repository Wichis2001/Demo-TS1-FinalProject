import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Game, GameResponse, Games, QuesAn, Reporte } from '../interfaces/game.interface';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl: string = environment.baseUrl;
  private _quesAn: QuesAn[] = [];
  private _scores: number[] = [];
  private _words:  string[] = [];
  private _game!: Game;

  get quesAn(){
    return this._quesAn ;
  }

  get scores(){
    return this._scores
  }

  get words(){
    return this._words;
  }

  get game(){
    return this._game;
  }

  addQuestion( pregunta:QuesAn ){
    this._quesAn.push( pregunta );

  }

  addScore( score: number ){
    this._scores.push( score )
  }

  addWord( word: string ){
    this._words.push( word )
  }

  resetQuestion( ){
    this._quesAn = [];
  }

  resetScores(){
    this._scores = [];
  }

  resetWords(){
    this._words = [];
  }

  constructor( private http: HttpClient,
               private authService: AuthService ) { }

  savePreguntados( nameGame: string, passwrd: string, descriptn: string, idModel: string ): Observable<GameResponse>{

    this._game = {
      nameGame,
      passwrd,
      descriptn,
      idModel,
      idUser: this.authService.usuario.idUser!,
      quesAns: this.quesAn,
      scores: this.scores
    }

    const url: string = `${this.baseUrl}/addNewGame`;
    const body = this._game ;
    this.resetQuestion();
    this.resetScores();
    return this.http.post<GameResponse>( url, body );
  }

  saveScramble( nameGame: string, passwrd: string, descriptn: string, idModel: string ): Observable<GameResponse>{
    if( passwrd=== null || passwrd === '' ){
      this._game = {
        nameGame,
        descriptn,
        idModel,
        idUser: this.authService.usuario.idUser!,
        words: this.words,
        scores: this.scores
      }
    }

    this._game = {
      nameGame,
      passwrd,
      descriptn,
      idModel,
      idUser: this.authService.usuario.idUser!,
      words: this.words,
      scores: this.scores
    }
    const url: string = `${this.baseUrl}/addNewGame`;
    const body = this.game;
    this.resetWords();
    this.resetScores();
    return this.http.post<GameResponse>( url, body );
  }

  getGames(): Observable<Games[]>{
    const url: string = `${this.baseUrl}/getGamesOwner/${ this.authService.usuario.idUser }`;
    return this.http.get<Games[]>( url );
  }

  getJuegosMasJugados(): Observable<Reporte[]>{
    const url: string = `${this.baseUrl}/getGamesWithMoreTimeUsed/${ this.authService.usuario.idUser }`;
    return this.http.get<Reporte[]>( url );
  }

  getJuegosMasUsuarios(): Observable<Reporte[]>{
    const url: string = `${this.baseUrl}/getGamesWithMoreUsers/${ this.authService.usuario.idUser }`;
    return this.http.get<Reporte[]>( url );
  }

}
