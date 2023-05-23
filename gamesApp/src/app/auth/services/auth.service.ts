
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthReponse, Usuario } from '../interfaces/interfaces';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return { ...this._usuario };
  }

  constructor( private http: HttpClient ) { }

  registro( nickname: string, name: string, lastname: string, password: string , rol: string ) {
    const url: string = `${this.baseUrl}/login/create`;
    const body = { nickname, name, lastname, password, rol  };
    return this.http.post<Usuario>( url, body)
                    .pipe(
                      tap( res => {
                        if( res._id ) {
                          this._usuario = {
                            nickname: res.nickname,
                            name: res.name,
                            lastname: res.lastname,
                            password: res.password,
                            rol: res.rol,
                            idUser: res.idUser
                          }
                        }
                      })
                    );
  }

  login( nickname: string, password: string ) {
    const url: string = `${this.baseUrl}/login`;
    const body = { nickname, password };

    return this.http.post<AuthReponse>( url, body )
                    .pipe(
                      tap( res => {
                        if( res.ok ) {
                          this._usuario = {
                            nickname: res.userTemp!.nickname,
                            name: res.userTemp!.name,
                            lastname: res.userTemp!.lastname,
                            password: res.userTemp!.password,
                            rol: res.userTemp!.rol,
                            idUser: res.userTemp!.idUser
                          }
                        }
                      }),
                      map( valide => valide.ok ),
                      catchError( err => of( err.error.msg ))
                    );
  }


  logOut() {
    localStorage.removeItem('token');
  }
}
