import {inject, Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {PokemonDetailsResponse, PokemonListResponse} from "../types";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api = inject(ApiService);

  getPokemon() {
    return this.api.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonDetail(name: string) {
    return this.api.get<PokemonDetailsResponse>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
