import type { Types } from "@/types/pokemonTypes";
import { usePokemonQuery } from "@api/queries/usePokemonQuery";
import Search from "@components/Search";
import ScrollUpButton from "@components/pokedex/ScrollUpButton";
import TypesCarousel from "@components/pokedex/TypesCarousel";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { useRef, useState } from "react";

const Pokedex = () => {
	const [_, setType] = useState<Types>("all");
	const sectionRef = useRef<HTMLDivElement>(null);
	const [currentPage, setCurrentPage] = useState(0);

	const {
		pokemonQuery: {
			fetchNextPage,
			isFetchingNextPage,
			fetchPreviousPage,
			isError,
			error,
			hasNextPage,
		},
	} = usePokemonQuery();

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
			<button
				onClick={() => {
					fetchNextPage();
					setCurrentPage((prev) => prev + 1);
				}}
				className="text-2xl text-white"
				type="button"
			>
				siguiente
			</button>
			<button
				onClick={() => {
					fetchPreviousPage();
					setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
				}}
				className="text-2xl text-white"
				type="button"
			>
				Anterior
			</button>
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
				{/* {pokemonDetailsQueries.map(
					(query) =>
						query.isSuccess && (
							<PokemonCard key={query.data.id} pokemon={query.data} />
						),
				)} */}
				<ScrollUpButton scrollUp={handleScrollToSection} />
			</section>
			;
		</div>
	);
};

export default Pokedex;
