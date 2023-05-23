import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Juego, Score } from '../interfaces/juego.interface';

@Injectable({
  providedIn: 'root'
})
export class JugarService {

  private baseUrl: string = environment.baseUrl;
  private _juegoActual!: Juego;

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
}
