export type PokemonListElement = {
  name: string;
  url: string;
}

export type PokemonListResponse = {
  count: number;
  results: PokemonListElement[];
}

export type PokemonDetailsResponse = {
  name: string;
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
    }
  }[];
}
