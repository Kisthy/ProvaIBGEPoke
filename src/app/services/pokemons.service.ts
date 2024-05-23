import { Injectable } from '@angular/core';
import { Pokemons } from '../interfaces/Pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }
  pokemons = [
    {
      "name": "Bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/",
      "id": "1",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      "name": "Ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/",
      "id": "2",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
      "name": "Venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/",
      "id": "3",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
      "name": "Charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/",
      "id": "4",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      "name": "Charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/",
      "id": "5",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
      "name": "Charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/",
      "id": "6",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
      "name": "Squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/",
      "id": "7",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      "name": "Wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/",
      "id": "8",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
      "name": "Blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/",
      "id": "9",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
      "name": "Caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/",
      "id": "10",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
      "name": "Metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/",
      "id": "11",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
      "name": "Butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/",
      "id": "12",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      "name": "Weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/",
      "id": "13",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
      "name": "Kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/",
      "id": "14",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
      "name": "Beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/",
      "id": "15",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
      "name": "Pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/",
      "id": "16",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
      "name": "Pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/",
      "id": "17",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
      "name": "Pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/",
      "id": "18",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
      "name": "Rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/",
      "id": "19",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      "name": "Raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/",
      "id": "20",
      "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    }
  ];

  listar(): Pokemons[] {
    return this.pokemons;
  }

  ngOnInit(): void {
    this.listar();
  }

}
