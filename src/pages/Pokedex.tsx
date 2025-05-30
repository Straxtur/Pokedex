import { useCurrentPage } from "@/context/PageContext";
import useLocalData from "@/hooks/useLocalData";
import { LocalPokemonList } from "@/services/pokemons";
import type { Types } from "@/types/pokemonTypes";
import { cleanInput, isEmptyTextInput } from "@/utils/formatter";
import { searchPokemon } from "@/utils/searchPokemon";
import { usePokemonQuery } from "@api/queries/usePokemonQuery";
import Search from "@components/Search";
import PaginationButtons from "@components/pokedex/PaginationButtons";
import PokemonCard from "@components/pokedex/PokemonCard";
import ScrollUpButton from "@components/pokedex/ScrollUpButton";
import TypesCarousel from "@components/pokedex/TypesCarousel";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { useMemo, useRef, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

const Pokedex = () => {
	const [pokemonType, setPokemonType] = useState<Types>(undefined);
	const sectionRef = useRef<HTMLDivElement>(null);
	const { currentPage } = useCurrentPage();
	const [pokemonSearch, setPokemonSearch] = useState<string>("");

	const {
		pokemonQuery: {
			data,
			fetchNextPage,
			fetchPreviousPage,
			isFetchingNextPage,
			isFetchingPreviousPage,
			isError,
			error,
			hasNextPage,
			hasPreviousPage,
		},
	} = usePokemonQuery();

	if (isError) {
		throw new Error(error.message);
	}

	const localData = useLocalData(data?.pages, currentPage);

	const pokemonSearched = useMemo(() => {
		if (!isEmptyTextInput(pokemonSearch) || pokemonType) {
			return searchPokemon(LocalPokemonList, pokemonSearch, pokemonType);
		}
		return localData;
	}, [pokemonSearch, localData, pokemonType]);

	const handleScrollToSection = () => {
		sectionRef.current?.scrollIntoView({
			behavior: "smooth", // Para un scroll suave
			block: "start", // Alinear con la parte superior de la sección
		});
	};

	const handleSearchPokemon = useDebounceCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const pokemon = e.target.value;

			setPokemonSearch(cleanInput(pokemon).toLowerCase());
		},
		500,
	);

	return (
		<main
			className={tvFlexContainer({
				direction: "column",
				justify: "start",
				align: "center",
				width: "fill",
				height: "fill",
				class: "bg-secondary-200 p-5 gap-12 min-h-fit",
			})}
		>
			<h1
				ref={sectionRef}
				className={tvText({
					size: "h1",
					color: "white",
					weight: "bold",
					align: "center",
					leading: "ten",
				})}
			>
				Search Pokemon
			</h1>

			<TypesCarousel setType={setPokemonType} />

			<Search search={handleSearchPokemon} bg="bg-secondary-100" />

			{!pokemonSearch && !pokemonType && (
				<PaginationButtons
					nextPage={fetchNextPage}
					prevPage={fetchPreviousPage}
					isFetchingNextPage={isFetchingNextPage}
					isFetchingPreviousPage={isFetchingPreviousPage}
					hasNextPage={hasNextPage}
					hasPreviousPage={hasPreviousPage}
					pages={data?.pages}
					search={setPokemonSearch}
				/>
			)}

			<section
				className={tvFlexContainer({
					direction: "row",
					align: "center",
					justify: "center",
					width: "fill",
					height: "fit",
					class: "flex-wrap gap-5 p-9 max-w-[1430px] relative ",
				})}
			>
				{pokemonSearched.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}

				{pokemonSearched.length > 0 && (
					<ScrollUpButton scrollUp={handleScrollToSection} />
				)}
			</section>

			{!pokemonSearch && !pokemonType && (
				<PaginationButtons
					nextPage={fetchNextPage}
					prevPage={fetchPreviousPage}
					isFetchingNextPage={isFetchingNextPage}
					isFetchingPreviousPage={isFetchingPreviousPage}
					hasNextPage={hasNextPage}
					hasPreviousPage={hasPreviousPage}
					pages={data?.pages}
					search={setPokemonSearch}
				/>
			)}
		</main>
	);
};

export default Pokedex;
