import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemons } from '../../interfaces/Pokemons';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons: Pokemons[] = [];
  constructor(private pokemonService: PokemonsService) {
  }

  listar():Pokemons[] {
    return this.pokemons = this.pokemonService.listar();
  }

  ngOnInit(): void {
    this.listar();
  }
}
