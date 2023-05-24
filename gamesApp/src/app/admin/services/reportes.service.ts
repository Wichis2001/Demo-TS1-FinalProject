import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JuegosProfesores, UsuariosComentarios } from '../interfaces/reporte.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  getJuegosMasUsuarios(): Observable<JuegosProfesores[]>{
    const url: string = `${this.baseUrl}/getGamesTeachers`;
    return this.http.get<JuegosProfesores[]>( url );
  }

  getUsuariosMasComentarios(): Observable<UsuariosComentarios[]>{
    const url: string = `${this.baseUrl}/getCommentStudents`;
    return this.http.get<UsuariosComentarios[]>( url );
  }
}
