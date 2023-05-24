import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificacionReporte, NotificationResponse, UsuarioGenerado } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ManejoUsuariosService {

  private baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }

  getUsuariosAdministradores():Observable<UsuarioGenerado[]>{
    const url: string = `${this.baseUrl}/getAdmins`;
    return this.http.get<UsuarioGenerado[]>( url );
  }

  getUsuariosMaestros():Observable<UsuarioGenerado[]>{
    const url: string = `${this.baseUrl}/getMaestros`;
    return this.http.get<UsuarioGenerado[]>( url );
  }

  getUsuariosEstudiantes():Observable<UsuarioGenerado[]>{
    const url: string = `${this.baseUrl}/getEstudiantes`;
    return this.http.get<UsuarioGenerado[]>( url );
  }

  getUsuarioByID( id: string ):Observable<UsuarioGenerado>{
    const url: string = `${this.baseUrl}/getUser/${ id }`;
    return this.http.get<UsuarioGenerado>( url );
  }

  putUsuario( usuario:UsuarioGenerado ): Observable<UsuarioGenerado>{
    const { rol, ...rest } = usuario
    const url: string = `${this.baseUrl}/editUser`;
    return this.http.put<UsuarioGenerado>( url, rest );
  }

  crearUsuario( usuario: UsuarioGenerado ) {
    const url: string = `${this.baseUrl}/login/create`;
    usuario.rol = 'admin'
    return this.http.post<UsuarioGenerado>( url, usuario )
  }

  crearNotificacion( notificacion: NotificacionReporte ): Observable<NotificationResponse> {
    const url: string = `${this.baseUrl}/addNotification`;
    return this.http.post<NotificationResponse>( url, notificacion )
  }
}
