import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number | undefined;

  constructor(
    private dataService : DataService
  ){ }
  ngOnInit(): void {
    this.getPokemons();
  }
//
handlePageChange(event:any) {
  this.page = event;
}
//GET POKEMONS
  getPokemons(){
    this.dataService.getPokemon()
      .subscribe((response:any) =>{
        this.totalPokemons = response.count;

        response.results.forEach((result: { name: string; }) => {
          this.dataService.getMoreData(result.name)
            .subscribe((pokemonResponse: any) =>{
              this.pokemons.push(pokemonResponse);
            });
        });
        console.log(this.pokemons);
      });
  }
}


// index
