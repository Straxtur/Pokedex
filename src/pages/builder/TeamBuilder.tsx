import { LocalPokemonList } from "@/services/pokemons";
import type { Types } from "@/types/pokemonTypes";
import { cleanInput, isEmptyTextInput } from "@/utils/formatter";
import { searchPokemon } from "@/utils/searchPokemon";
import Button from "@components/Button";
import Search from "@components/Search";
import FilterType from "@components/builder/FilterType";
import PokemonListCard from "@components/builder/PokemonListCard";
import PokemonTeamCard from "@components/builder/PokemonTeamCard";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { useMemo, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

const TeamBuilder = () => {
	const [showAnalytics, setShowAnalytics] = useState(false);
	const [pokemonSearch, setPokemonSearch] = useState<string>("");
	const [pokemonType, setPokemonType] = useState<Types>(undefined);

	const handleSearchPokemon = useDebounceCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const pokemon = e.target.value;

			setPokemonSearch(cleanInput(pokemon).toLowerCase());
		},
		500,
	);

	const handleToggleAnalytics = () => {
		setShowAnalytics((show) => !show);
	};

	const pokemonSearched = useMemo(() => {
		if (!isEmptyTextInput(pokemonSearch) || pokemonType) {
			return searchPokemon(LocalPokemonList, pokemonSearch, pokemonType);
		}
		return LocalPokemonList;
	}, [pokemonSearch, pokemonType]);

	return (
		<div
			className={tvFlexContainer({
				direction: "column",
				justify: "start",
				align: "center",
				height: "fit",
				width: "fill",
				class: "min-h-fit gap-4 text-white bg-secondary-200 py-12 ",
			})}
		>
			<h1
				className={tvText({
					color: "white",
					weight: "bold",
					size: "h1",
					leading: "ten",
				})}
			>
				Team Builder
			</h1>

			{/* Equipo pokemon */}
			<main
				className={tvFlexContainer({
					direction: "row",
					justify: "center",
					align: "center",
					height: "fit",
					width: "fit",
					class: "gap-4 flex-wrap px-2",
				})}
			>
				<PokemonTeamCard />
				<PokemonTeamCard />
				<PokemonTeamCard />
				<PokemonTeamCard />
				<PokemonTeamCard />
				<PokemonTeamCard />
			</main>

			<Button
				onClick={handleToggleAnalytics}
				textColor="white"
				padding="default"
				bg="bg-secondary-100"
				shapeButton=" border-[#0D9EDF] border-2"
			>
				{showAnalytics ? "Hidden" : "Show"} Team Analytics
			</Button>

			{/* Analytics del equipo */}
			{showAnalytics && <section>Analytics del equip</section>}

			{/* Biblioteca de pokemons */}
			<section className="flex flex-col w-full h-full p-4 bg-secondary-100 rounded-xl">
				<div
					className={tvFlexContainer({
						direction: { initial: "column", lg: "row" },
						justify: "center",
						align: "center",
						width: "fill",
						height: "fit",
						class: "px-2 py-5",
					})}
				>
					<FilterType setType={setPokemonType} />
					<Search search={handleSearchPokemon} bg="bg-secondary-200" />
				</div>

				<div
					className={tvFlexContainer({
						justify: "center",
						align: "center",
						width: "fill",
						height: "fill",
						class: "flex-wrap gap-4 overflow-y-scroll max-h-[400px]",
					})}
				>
					{pokemonSearched.map((pokemon) => (
						<PokemonListCard key={pokemon.id} pokemon={pokemon} />
					))}
				</div>
			</section>
		</div>
	);
};

export default TeamBuilder;
