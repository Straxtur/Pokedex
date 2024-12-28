export interface AllPokemonData {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonPagination[];
}

interface PokemonPagination {
	name: string;
	url: string;
}
