import { LocalPokemonList } from "@/services/pokemons";
import { searchPokemonByName } from "@/utils/searchPokemon";
import Search from "@components/Search";
import FooterWave from "@components/home/FooterWave";
import Hero from "@components/home/Hero";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

const Home = () => {
	const [pokemonSearch, setPokemonSearch] = useState<string>("");

	const handleSearchPokemon = useDebounceCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const pokemon = e.target.value;
			setPokemonSearch(pokemon.toLowerCase());
		},
		500,
	);

	const pokemonSearched = useMemo(() => {
		if (pokemonSearch.trim() !== "") {
			return searchPokemonByName(LocalPokemonList, pokemonSearch);
		}
	}, [pokemonSearch]);

	return (
		<main
			className={tvFlexContainer({
				direction: "column",
				width: "fill",
				height: "fill",
				justify: "center",
				align: "center",
				class: "pt-5 min-w-[320px]",
			})}
		>
			<Hero headerClass="flex-1" />

			<div
				className={tvFlexContainer({
					direction: "column",
					align: "center",
					justify: "start",
					width: "fill",
					height: "fit",
					class: "flex-1",
				})}
			>
				<Search search={handleSearchPokemon} bg="bg-secondary-200" />

				{pokemonSearch && (
					<div
						className={tvFlexContainer({
							direction: "column",
							align: "start",
							justify: "start",
							width: "fill",
							class:
								"gap-3 py-2 max-w-[755px]  max-h-[200px] xl:max-h-[300px] scrollbar  rounded-s-3xl overflow-y-scroll bg-secondary-200",
						})}
					>
						{pokemonSearched?.map((pokemon) => (
							<Link
								to="/pokemon"
								className={tvFlexContainer({
									direction: "row",
									align: "center",
									justify: "between",
									width: "fill",
									height: "fit",
									class: " hover:bg-secondary-100",
								})}
								key={pokemon.id}
							>
								<p
									className={tvText({
										color: "white",
										size: "buttonText",
										weight: "normal",
										class: "uppercase pl-4",
									})}
								>
									{pokemon.name}
								</p>

								<figure>
									<img
										className="w-[60px] lg:p-0 filter saturate-200"
										src={pokemon.sprites}
										alt={pokemon.name}
									/>
								</figure>
							</Link>
						))}
					</div>
				)}
			</div>

			<FooterWave headerClass="flex-1" />
		</main>
	);
};

export default Home;
