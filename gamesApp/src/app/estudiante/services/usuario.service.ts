import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Medallas, Notificaciones } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient,
               private authService: AuthService ){}

  getNotificaciones(): Observable<Notificaciones[]>{
    const url: string = `${this.baseUrl}/getNotifications/${ this.authService.usuario.idUser }`;
    return this.http.get<Notificaciones[]>( url );
  }

  getMedallasTabla(): Observable<Medallas[]>{
    const url: string = `${this.baseUrl}/getMedalTable/${ this.authService.usuario.idUser }`;
    return this.http.get<Medallas[]>( url );
  }
}
