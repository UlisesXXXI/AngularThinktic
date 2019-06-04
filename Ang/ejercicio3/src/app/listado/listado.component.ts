import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  lista:string[];
  elementoLista="";


  constructor() { }

  ngOnInit() {
    this.lista = [];
    this.lista =  ["uno","dos","tres","cuatro"]
    this.elementoLista = "";
  }

  addElemento(){
    this.lista.push(this.elementoLista);
    this.elementoLista = "";
  }

}
