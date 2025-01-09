import { useRenderEvolutionLine } from "@/hooks/useRenderEvolutionLine";
import {
	usePokemonLineEvolution,
	useSinglePokemonQuery,
} from "@api/queries/useSinglePokemonQuery";
import Abilities from "@components/pokemon/Abilities";
import Details from "@components/pokemon/Details";
import PokemonEvolution from "@components/pokemon/EvolutionLine";
import PokemonSplash from "@components/pokemon/PokemonSplash";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { Link, useNavigate } from "@tanstack/react-router";
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
		pokemonQuery: { data: pokemon, error, isSuccess, isLoading },
	} = useSinglePokemonQuery({ pokeName });

	const { evolutionQuery } = usePokemonLineEvolution(pokeName);

	if (error || evolutionQuery.error) {
		console.error(error?.message);
		console.error(evolutionQuery.error?.message);
	}

	if (isSuccess) {
		console.log(pokemon);
	}

	const navigate = useNavigate();

	return (
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
								useRenderEvolutionLine(evolutionQuery.data).map((evolution) => (
									<PokemonEvolution
										key={evolution.name}
										evolution={evolution}
										navigate={navigate}
									/>
								))}
						</div>
					</div>

					{pokemon && (
						<div
							className={`${tvFlexContainer({
								direction: "row",
								align: "center",
								justify: "center",
								width: "fit",
								height: "fit",
								class: "gap-7 py-4",
							})} ${tvText({
								color: "white",
								weight: "bold",
								size: "bigText",
							})}`}
						>
							<Link
								params={{ name: pokemon?.name }}
								to="/pokemon/$name/stats"
								className={statsRoute ? "text-[#0D9EDF]" : ""}
							>
								Stats
							</Link>
							<span>|</span>
							<Link
								params={{ name: pokemon?.name }}
								to="/pokemon/$name/movimientos"
								className={movesRoute ? "text-[#0D9EDF]" : ""}
							>
								Attacks
							</Link>
							<span>|</span>
							<Link
								params={{ name: pokemon?.name }}
								to="/pokemon/$name/debilidades"
								className={weaknessesRoute ? "text-[#0D9EDF]" : ""}
							>
								weaknesses
							</Link>
						</div>
					)}
					<div>{children}</div>
				</section>
			)}
		</div>
	);
};

export default Index;
