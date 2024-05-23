import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { IbgeComponent } from './components/ibge/ibge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsComponent, IbgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-checkpoint';
}
