import {Component, inject, Input} from '@angular/core';
import {PokemonListElement} from "../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './single-pokemon.component.html',
  styleUrl: './single-pokemon.component.scss'
})
export class SinglePokemonComponent {
  @Input()
  pokemon!: PokemonListElement;

  router = inject(Router);

  goToDetails() {
    this.router.navigate(['/pokemon/', this.pokemon.name]);
  }
}
