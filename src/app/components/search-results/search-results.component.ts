import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//services
import {HeroeService} from '../../services/heroes.services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  
  public heroes:any = [];
  
  constructor( 
    private activateRoute:ActivatedRoute,
    private _heroesSearch:HeroeService,
    private router:Router
  ) { 
    this.activateRoute.params.subscribe(params => {
      this.heroes = this._heroesSearch.buscarHeroes(params['termino'])
    });

  }

  ngOnInit(): void {
  }
  verHeroe(idx:number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }

}
