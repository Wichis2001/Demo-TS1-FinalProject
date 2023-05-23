import { Component, OnInit } from '@angular/core';
import { Medallas } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-medallas',
  templateUrl: './medallas.component.html',
  styles: [
  ]
})
export class MedallasComponent implements OnInit{

  columnas: string[] = ['No.', 'Tipo de Medalla', 'Descripción'];
  medallas: Medallas[] = [];

  constructor( private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getMedallasTabla().subscribe( res => {
      this.medallas = res;
    })

  }

}
