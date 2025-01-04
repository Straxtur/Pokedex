import { useCurrentPage } from "@/context/context";
import { LocalPokemonList } from "@/services/pokemons";
import type { PokemonLocalData } from "@/types/pokemonFetch";
import type { Types } from "@/types/pokemonTypes";
import { usePokemonQuery } from "@api/queries/usePokemonQuery";
import Search from "@components/Search";
import PokemonCard from "@components/pokedex/PokemonCard";
import ScrollUpButton from "@components/pokedex/ScrollUpButton";
import TypesCarousel from "@components/pokedex/TypesCarousel";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { useMemo, useRef, useState } from "react";

const Pokedex = () => {
	const [_, setType] = useState<Types>("all");
	const sectionRef = useRef<HTMLDivElement>(null);
	const { currentPage, setCurrentPage } = useCurrentPage();

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

	const localData = useMemo(() => {
		if (data?.pages.find((page) => page.page === currentPage)) {
			const pokemonPaginated = data.pages.find(
				(page) => page.page === currentPage,
			);

			return pokemonPaginated?.results
				.map((pokemon) => {
					const localPokemon = LocalPokemonList.find(
						(localPokemon) => localPokemon.name === pokemon.name,
					);
					if (localPokemon) {
						return {
							...localPokemon,
							sprites: localPokemon.sprites.front_default,
						};
					}
					return undefined;
				})
				.filter((pokemon) => pokemon !== undefined) as PokemonLocalData[];
		}
		return [];
	}, [data, currentPage]);

	if (isError) {
		throw new Error(error.message);
	}
	const handleScrollToSection = () => {
		sectionRef.current?.scrollIntoView({
			behavior: "smooth", // Para un scroll suave
			block: "start", // Alinear con la parte superior de la sección
		});
	};

	return (
		<div
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
				className={tvText({
					size: "h1",
					color: "white",
					weight: "bold",
					align: "center",
					leading: "ten",
				})}
			>
				Búsqueda Pokemon
			</h1>
			<TypesCarousel setType={setType} />
			<Search bg="bg-secondary-100" />

			<div
				className={tvFlexContainer({
					direction: "row",
					align: "center",
					justify: "center",
					width: "fit",
					height: "fit",
					class: "gap-5",
				})}
			>
				<button
					disabled={!hasPreviousPage || isFetchingPreviousPage}
					onClick={async () => {
						if (data?.pages.find((page) => page.page === currentPage - 1)) {
							return setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
						}
						await fetchPreviousPage();
						setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
					}}
					className="text-2xl text-white"
					type="button"
				>
					Anterior
				</button>

				<button
					disabled={!hasNextPage || isFetchingNextPage}
					onClick={async () => {
						if (data?.pages.find((page) => page.page === currentPage + 1)) {
							setCurrentPage((prev) => prev + 1);
							return;
						}
						await fetchNextPage();
						setCurrentPage((prev) => prev + 1);
					}}
					className="text-2xl text-white"
					type="button"
				>
					siguiente
				</button>
			</div>

			<section
				ref={sectionRef}
				className={tvFlexContainer({
					direction: "row",
					align: "center",
					justify: "center",
					width: "fill",
					height: "fit",
					class: "flex-wrap gap-5 p-9 max-w-[1430px] relative ",
				})}
			>
				{localData.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
				<ScrollUpButton scrollUp={handleScrollToSection} />
			</section>
		</div>
	);
};

export default Pokedex;
