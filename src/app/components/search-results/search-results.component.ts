import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private _heroesSearch:HeroeService
  ) { 
    this.activateRoute.params.subscribe(params => {
      this.heroes = this._heroesSearch.buscarHeroes(params['termino'])
    });

  }

  ngOnInit(): void {
  }

}
