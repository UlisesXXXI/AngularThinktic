import { Component, OnInit } from '@angular/core';
import { Formalta } from '../entities/formalta';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  listaDeFormularios:Formalta[];
  data:Formalta;
  sexoSelector:string[]=[];
  constructor() { 
    this.data = new Formalta();
    
    //selector
    this.sexoSelector = ["Man","Woman","Other"];
    this.data.sex = this.sexoSelector[0];
    this.listaDeFormularios = [];

  }

  ngOnInit() {
    
  }


  submitForm(form:NgForm){
    console.log(form);
    if(form.valid && this.data.policy === true){
      this.listaDeFormularios.push(this.data);
      this.data = new Formalta();
      form.reset();
    }
  }

}
