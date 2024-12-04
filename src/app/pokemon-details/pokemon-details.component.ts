import {Component, inject, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {filter, map, Observable, switchMap} from "rxjs";
import {PokemonDetailsResponse, PokemonListElement} from "../types";
import {ActivatedRoute} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit {
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);

  pokemon$!: Observable<PokemonDetailsResponse>;

  ngOnInit() {
    this.pokemon$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter(pokemonName => pokemonName !== null),
      switchMap(pokemonName => this.pokemonService.getPokemonDetail(pokemonName))
    )
  }
}
