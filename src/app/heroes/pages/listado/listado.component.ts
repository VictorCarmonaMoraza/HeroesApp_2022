import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //Arreglo de heroes
  heroes:Heroe[]=[];

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
    //Llamamos el servicio
    this.heroesService.getHeroes()
    .subscribe(resp=>{
      console.log(resp);
      this.heroes = resp
    })
  }

}
