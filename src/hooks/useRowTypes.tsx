import type { Types } from "@/types/pokemonTypes";
import { typeAttack, typeDefenses, typeVersus } from "@/utils/typesPokemon";

export const useRowTypeDefenses = (typePokemon: Exclude<Types, undefined>) =>
	typeVersus.map((type) => (
		<td key={type} className="px-4 py-2 text-center">
			x{typeDefenses[typePokemon][type] ?? "1"}
		</td>
	));

export const useRowTypeAttack = (typePokemon: Exclude<Types, undefined>) =>
	typeVersus.map((type) => (
		<td key={type} className="px-4 py-2 text-center">
			x{typeAttack[typePokemon][type] ?? "1"}
		</td>
	));
