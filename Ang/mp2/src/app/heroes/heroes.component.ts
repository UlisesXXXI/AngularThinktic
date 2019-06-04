import { Component, OnInit } from '@angular/core';
import {Hero} from '../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //properties
  hero:Hero;
  heroes:Hero[];

  constructor() { }

  ngOnInit() {
    this.hero = new Hero(10,"Ruben");
    this.heroes = new Array();
    this.heroes.push(new Hero(1,'Nacho'));
    
  }

  addHeroe(){
    this.heroes.push(this.hero);
    this.hero = new Hero();
  }

  Eliminar(h:Hero){
    
    this.heroes.splice(this.heroes.indexOf(h));
  }

}
