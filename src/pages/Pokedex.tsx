import type { Types } from "@/types/pokemonTypes";
import {
	usePokemonFilterQuery,
	usePokemonQuery,
} from "@api/queries/usePokemonQuery";
import Button from "@components/Button";
import Search from "@components/Search";
import PokemonCard from "@components/pokedex/PokemonCard";
import ScrollUpButton from "@components/pokedex/ScrollUpButton";
import TypesCarousel from "@components/pokedex/TypesCarousel";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { useRef, useState } from "react";

const Pokedex = () => {
	const [type, setType] = useState<Types>("all");
	const sectionRef = useRef<HTMLDivElement>(null);

	const {
		pokemonQuery: {
			fetchNextPage,
			isFetchingNextPage,
			isError,
			error,
			hasNextPage,
		},
		pokemonDetailsQueries,
	} = type === "all" ? usePokemonQuery() : usePokemonFilterQuery(type);

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

			{/* Render Pokemon cards */}
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
				{pokemonDetailsQueries.map(
					(query) =>
						query.isSuccess && (
							<PokemonCard key={query.data.id} pokemon={query.data} />
						),
				)}
				<ScrollUpButton scrollUp={handleScrollToSection} />
			</section>

			{hasNextPage && (
				<Button
					onClick={() => fetchNextPage()}
					textColor="white"
					bg="bg-secondary-100"
					colorBorder="white"
					padding="default"
					isDisabled={isFetchingNextPage}
				>
					{isFetchingNextPage ? "Cargando..." : "Cargar más"}
				</Button>
			)}
		</div>
	);
};

export default Pokedex;
