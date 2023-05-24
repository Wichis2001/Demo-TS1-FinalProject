import { Component, OnInit } from '@angular/core';
import { JuegosProfesores } from '../../interfaces/reporte.interface';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-profesores-juegos',
  templateUrl: './profesores-juegos.component.html',
  styles: [
  ]
})
export class ProfesoresJuegosComponent implements OnInit{

  columnas: string[] = ['No.', 'Usuario', 'Cantidad de Juegos'];
  reportes: JuegosProfesores[] = [];

  constructor( private reporteService: ReportesService) {}

  ngOnInit(): void {
    this.reporteService.getJuegosMasUsuarios().subscribe( res => {
      this.reportes = res;
    })

  }

}
