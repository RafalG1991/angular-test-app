export type PokemonListElement = {
  name: string;
  url: string;
}

export type PokemonListResponse = {
  count: number;
  results: PokemonListElement[];
}
