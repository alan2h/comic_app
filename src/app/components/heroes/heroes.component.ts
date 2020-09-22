import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import {HeroeService} from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  heroes:any [];
  heroe:any = {};

  constructor( private _serviceHeroes:HeroeService, private router:Router ) { }

  ngOnInit(): void {
    this.heroes = this._serviceHeroes.getHeroes();
  }
  verHeroe(idx:number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }


}
