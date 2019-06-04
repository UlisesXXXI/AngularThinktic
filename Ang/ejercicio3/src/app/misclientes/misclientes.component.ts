import { Component, OnInit } from '@angular/core';
import {Cliente} from '../entities/cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {

  titulo:string="Listado de Clientes";
  clientes:Cliente[];
  clienteActual:Cliente;
  constructor() { }

  ngOnInit() {
    this.clientes=[
      new Cliente("cliente 1", "Direccion 1"),
      new Cliente("cliente 2", "Direccion 2"),
      new Cliente("cliente 3", "Direccion 3")

    ];

    this.clienteActual = new Cliente();
    
    
  }

  addCliente(){
    this.clientes.push(this.clienteActual);
    this.clienteActual = new Cliente();
  }

}
