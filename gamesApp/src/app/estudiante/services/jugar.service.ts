import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Comentario, ComentarioUsuario, Juego, Question, RespuestaResponse, Score, ScoreAgregar, ScorePlay, Scramble } from '../interfaces/juego.interface';

@Injectable({
  providedIn: 'root'
})
export class JugarService {

  private baseUrl: string = environment.baseUrl;
  private _juegoActual!: Juego;
  private _comentario!: Comentario;
  private _comentarios: ComentarioUsuario[] = [];

  get comentarios(){
    return this._comentarios;
  }

  get juegoActual(){
    return { ...this._juegoActual }
  }

  definirJuegoActual( juego: Juego ){
    this._juegoActual = juego;
  }

  constructor( private http: HttpClient,
               private authService: AuthService ) { }

  getAllGames(): Observable<Juego[]> {
    const url: string = `${this.baseUrl}/getAllGames`;
    return this.http.get<Juego[]>( url );
  }

  getGamesFree(): Observable<Juego[]> {
    const url: string = `${this.baseUrl}/getGamesFree`;
    return this.http.get<Juego[]>( url );
  }

  getScoresGame( idGame: string ): Observable<Score[]> {
    const url: string = `${this.baseUrl}/getScores/${ idGame }`;
    return this.http.get<Score[]>( url );
  }

  getVerifyPassword( idGame: string, password: string ): Observable<string>{
    const url: string = `${this.baseUrl}/verifyPassword/${ idGame }/${ password }`;
    return this.http.get<string>( url );
  }

  getComentarios(){
    const url: string = `${this.baseUrl}/getComments/${ this.juegoActual.idGame }`;
    this.http.get<ComentarioUsuario[]>( url ).subscribe( comentarios => {
      this._comentarios = [];
      this._comentarios = comentarios;
    });
  }

  addComentario( idUser: string, information: string ): Observable<Comentario>{
    this._comentario = {
      idUser,
      idGame: this._juegoActual.idGame,
      information
    }
    const url: string = `${this.baseUrl}/addComment`;
    const body = this._comentario ;
    return this.http.post<Comentario>( url, body );
  }

  getCodigosPalabras( idGame: string ):  Observable<string[]>{
    const url: string = `${this.baseUrl}/getCodeWords/${ idGame }`;
    return this.http.get<string[]>( url );
  }

  getPalabra( idWord: string ):  Observable<Scramble> {
    const url: string = `${this.baseUrl}/getWord/${ idWord }`;
    return this.http.get<Scramble>( url );
  }

  getPalabraDesordenada( palabra: string ): Observable<Scramble>{
    const url: string = `${this.baseUrl}/scramble/${ palabra }`;
    return this.http.get<Scramble>( url );
  }

  getPuntaje( idWord: string, respuesta:string ): Observable<ScorePlay> {
    const url: string = `${this.baseUrl}/playScramble/${ idWord }/${ respuesta }`;
    return this.http.get<ScorePlay>( url );
  }

  addPuntaje( score: ScoreAgregar): Observable<ScoreAgregar>{
    const url: string = `${this.baseUrl}/addPoints`;
    const body = score ;
    return this.http.post<ScoreAgregar>( url, body );
  }

  getCodigosPregunta( idGame: string ):  Observable<string[]>{
    const url: string = `${this.baseUrl}/getCodesQuestions/${ idGame }`;
    return this.http.get<string[]>( url );
  }

  getCodigosRespuesta( idGame: string ):  Observable<string[]>{
    const url: string = `${this.baseUrl}/getCodesAnswers/${ idGame }`;
    return this.http.get<string[]>( url );
  }

  getTextQuestion( idGame: string ):  Observable<Question>{
    const url: string = `${this.baseUrl}/getQuestion/${ idGame }`;
    return this.http.get<Question>( url );
  }

  getTextAnswer( idGame: string ):  Observable<RespuestaResponse>{
    const url: string = `${this.baseUrl}/getAnswer/${ idGame }`;
    return this.http.get<RespuestaResponse>( url );
  }

  getPuntajePreguntados( idQuest: string, idAnswer:string ): Observable<ScorePlay> {
    const url: string = `${this.baseUrl}/playPreguntados/${ idQuest }/${ idAnswer }`;
    return this.http.get<ScorePlay>( url );
  }

  shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]; // Crear una copia del arreglo original

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generar un índice aleatorio

      // Intercambiar elementos utilizando la destructuración de arreglos
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }
}
