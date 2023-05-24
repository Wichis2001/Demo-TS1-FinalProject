import { Component, OnInit } from '@angular/core';
import { UsuariosComentarios } from '../../interfaces/reporte.interface';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-usuarios-comentarios',
  templateUrl: './usuarios-comentarios.component.html',
  styles: [
  ]
})
export class UsuariosComentariosComponent implements OnInit{

  columnas: string[] = ['No.', 'Usuario', 'Cantidad de Comentarios'];
  reportes: UsuariosComentarios[] = [];

  constructor( private reporteService: ReportesService) {}

  ngOnInit(): void {
    this.reporteService.getUsuariosMasComentarios().subscribe( res => {
      this.reportes = res;
    })

  }

}
