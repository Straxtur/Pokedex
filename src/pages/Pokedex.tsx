import { useCurrentPage } from "@/context/context";
import type { Types } from "@/types/pokemonTypes";
import { usePokemonQuery } from "@api/queries/usePokemonQuery";
import Search from "@components/Search";
import useLocalData from "@components/hooks/useLocalData";
import PaginationButtons from "@components/pokedex/PaginationButtons";
import PokemonCard from "@components/pokedex/PokemonCard";
import ScrollUpButton from "@components/pokedex/ScrollUpButton";
import TypesCarousel from "@components/pokedex/TypesCarousel";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { useRef, useState } from "react";

const Pokedex = () => {
	const [_, setType] = useState<Types>("all");
	const sectionRef = useRef<HTMLDivElement>(null);
	const { currentPage } = useCurrentPage();

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

	const handleScrollToSection = () => {
		sectionRef.current?.scrollIntoView({
			behavior: "smooth", // Para un scroll suave
			block: "start", // Alinear con la parte superior de la sección
		});
	};

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
				Búsqueda Pokemon
			</h1>

			<TypesCarousel setType={setType} />

			<Search bg="bg-secondary-100" />

			<PaginationButtons
				nextPage={fetchNextPage}
				prevPage={fetchPreviousPage}
				isFetchingNextPage={isFetchingNextPage}
				isFetchingPreviousPage={isFetchingPreviousPage}
				hasNextPage={hasNextPage}
				hasPreviousPage={hasPreviousPage}
				pages={data?.pages}
			/>

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
				{localData.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
				<ScrollUpButton scrollUp={handleScrollToSection} />
			</section>

			<PaginationButtons
				nextPage={fetchNextPage}
				prevPage={fetchPreviousPage}
				isFetchingNextPage={isFetchingNextPage}
				isFetchingPreviousPage={isFetchingPreviousPage}
				hasNextPage={hasNextPage}
				hasPreviousPage={hasPreviousPage}
				pages={data?.pages}
			/>
		</main>
	);
};

export default Pokedex;
