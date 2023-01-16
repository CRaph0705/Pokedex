import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http :HttpClient
  ) { }
//GET POKEMONS
    getPokemon(){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    }
// GET MORE POKEMONS DATA 
    getMoreData(name: string){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
}

// index : ((page -1)*12) à (page * 12 -1)
//conserver tableau des pokemons downloaded
// 

//filtres
// par type : nouvelle requete api
// https://pokeapi.co/api/v2/type/1


//gestion pagination en back, récup des détails, et ordre par id
