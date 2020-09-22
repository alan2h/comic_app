import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroes.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe:any = {};

  constructor( 
    private activatedRoute:ActivatedRoute,
    private _heroeService:HeroeService  
    ) { 
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    })
  }

  ngOnInit(): void {
  }

}
