import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Resultado } from '../entities/resultado';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'; 
import { ResultadosServiceService } from '../services/resultados-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  url:string = 'http://cursosdedesarrollo.com/pactometro/resultados.json'; 
  titulo:string="Listado de resulstados";
  resultados:Promise<Resultado>;
  
  
  constructor(private serResultados:ResultadosServiceService) { }

  ngOnInit() 
  {
    this.resultados = this.serResultados.getData().toPromise();
     
  }
  
}
