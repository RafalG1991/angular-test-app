import {inject, Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {PokemonListResponse} from "../types";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = inject(ApiService);

  getPokemon() {
    return this.api.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon');
  }
}
