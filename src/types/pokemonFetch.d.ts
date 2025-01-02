export interface AllPokemonData {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonPagination[];
	page: number;
}

interface PokemonPagination {
	name: string;
	url: string;
}

export interface PokemonType {
	pokemon: PokemonPagination;
	slot: number;
}
