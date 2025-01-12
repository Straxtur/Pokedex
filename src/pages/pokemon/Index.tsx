import { PokemonProvider } from "@/context/PokemonDataContext";
import { useRenderEvolutionLine } from "@/hooks/useRenderEvolutionLine";
import {
	usePokemonLineEvolution,
	useSinglePokemonQuery,
} from "@api/queries/useSinglePokemonQuery";
import NotFound from "@components/NotFound";
import Abilities from "@components/pokemon/Abilities";
import Details from "@components/pokemon/Details";
import PokemonEvolution from "@components/pokemon/EvolutionLine";
import Navbar from "@components/pokemon/Navbar";
import PokemonSplash from "@components/pokemon/PokemonSplash";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface props {
	children: ReactNode;
	pokeName: string;
	statsRoute?: string | undefined;
	movesRoute?: string | undefined;
	weaknessesRoute?: string | undefined;
}

const Index: React.FC<props> = ({
	children,
	pokeName,
	statsRoute,
	movesRoute,
	weaknessesRoute,
}) => {
	const {
		pokemonQuery: { data: pokemon, error, isLoading },
	} = useSinglePokemonQuery({ pokeName });

	const { evolutionQuery } = usePokemonLineEvolution(pokeName);

	const navigate = useNavigate();

	if (error || evolutionQuery.error) {
		console.error(error?.message);
		console.error(evolutionQuery.error?.message);

		return <NotFound message={error?.message} />;
	}

	return (
		<PokemonProvider pokemon={pokemon ?? null}>
			<div
				className={tvFlexContainer({
					direction: "column",
					justify: "start",
					align: "center",
					height: "fill",
					width: "fill",
					class: "min-h-fit gap-4 p-5 text-white bg-secondary-200 ",
				})}
			>
				{!isLoading && (
					<section
						className={tvFlexContainer({
							direction: "column",
							align: "center",
							justify: "start",
							width: "fill",
							height: "fit",
							class: "max-w-[1000px] min-w-[255px]",
						})}
					>
						{/* image + name */}
						<PokemonSplash pokemon={pokemon} />

						{/* details + skills container */}
						<div
							className={tvFlexContainer({
								direction: { initial: "column", lg: "row" },
								width: "fill",
								height: "fit",
								class: "lg:gap-3",
							})}
						>
							{/* Basic Details */}
							<Details pokemon={pokemon} />

							{/* skills */}
							<Abilities pokemon={pokemon} />
						</div>

						{/* evolution line */}
						<div
							className={tvFlexContainer({
								direction: "column",
								width: "fill",
								height: "fit",
								class: "lg:gap-3 bg-secondary-100 mt-4 rounded-xl",
							})}
						>
							<h1
								className={tvText({
									color: "white",
									weight: "bold",
									class: "text-xl self-start pl-2 pt-2",
								})}
							>
								Evolution Line
							</h1>

							<div
								className={tvFlexContainer({
									direction: "row",
									align: "center",
									justify: "center",
									width: "fill",
									height: "fit",
									class: "flex-wrap p-5",
								})}
							>
								{!evolutionQuery.isLoading &&
									evolutionQuery.data &&
									useRenderEvolutionLine(evolutionQuery.data).map(
										(evolution) => (
											<PokemonEvolution
												key={evolution.name}
												evolution={evolution}
												navigate={navigate}
											/>
										),
									)}
							</div>
						</div>
						{pokemon && (
							<Navbar
								pokeName={pokemon.name}
								movesRoute={movesRoute}
								statsRoute={statsRoute}
								weaknessesRoute={weaknessesRoute}
							/>
						)}
						{children}
					</section>
				)}
			</div>
		</PokemonProvider>
	);
};

export default Index;
