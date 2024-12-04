import {Component, inject, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {map, Observable} from "rxjs";
import {PokemonListElement} from "../types";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{
  private pokemonService = inject(PokemonService);

  pokemons$!: Observable<PokemonListElement[]>;

  ngOnInit() {
    this.pokemons$ = this.pokemonService.getPokemon()
      .pipe(
        map(response => response!.results),
      )
  }

}
