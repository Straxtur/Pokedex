import { usePokemonQuery } from "@api/queries/usePokemonQuery";
import Button from "@components/Button";
import Search from "@components/Search";
import PokemonCard from "@components/pokedex/PokemonCard";
import TypesCarousel from "@components/pokedex/TypesCarousel";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

const Pokedex = () => {
	const {
		pokemonQuery: {
			fetchNextPage,
			isFetchingNextPage,
			isError,
			error,
			hasNextPage,
		},
		pokemonDetailsQueries,
	} = usePokemonQuery();

	if (isError) {
		throw new Error(error.message);
	}

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

			<TypesCarousel />

			<Search bg="bg-secondary-100" />

			{/* Render Pokemon cards */}
			<section
				className={tvFlexContainer({
					direction: "row",
					align: "center",
					justify: "center",
					width: "fill",
					height: "fit",
					class: "flex-wrap gap-5 p-9 max-w-[1430px] ",
				})}
			>
				{pokemonDetailsQueries.map(
					(query) =>
						query.isSuccess && (
							<PokemonCard key={query.data.id} pokemon={query.data} />
						),
				)}
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
