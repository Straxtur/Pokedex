import {
	alturaEnMetros,
	formatPokemonId,
	pesoEnKilos,
} from "@/utils/formatter";
import { useSinglePokemonQuery } from "@api/queries/useSinglePokemonQuery";
import { BasicContainer } from "@components/Containers";
import { RulerIcon, WeightIcon } from "@components/Icons";
import PokemonType from "@components/PokemonType";
import {
	tvBackgroundPokemon,
	tvFlexContainer,
} from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import type { ReactNode } from "react";
import RenderAbility from "../../components/pokemon/RenderAbility";

interface props {
	children: ReactNode;
	pokeName: string;
}

const Index: React.FC<props> = ({ children, pokeName }) => {
	const {
		pokemonQuery: { data: pokemon, error, isSuccess, isLoading },
	} = useSinglePokemonQuery({ pokeName });

	if (error) {
		console.error(error.message);
	}

	if (isSuccess) {
		console.log(pokemon);
	}

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
					<figure
						className={`${tvFlexContainer({
							direction: "column",
							align: "center",
							justify: "center",
							width: "fill",
							height: "fit",
							class: "rounded-t-xl",
						})} ${tvBackgroundPokemon({
							type: pokemon?.types[0].type.name,
						})}`}
					>
						<h1
							className={tvText({
								color: "white",
								weight: "normal",
								class: "uppercase text-xl self-start md:self-center pl-2 pt-2",
							})}
						>
							{pokemon?.name} ({formatPokemonId(pokemon?.id)})
						</h1>

						<img
							className="max-w-64 filter saturate-200"
							src={pokemon?.sprites.other?.["official-artwork"].front_default}
							alt={pokemon?.name}
						/>
					</figure>

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
						<section
							className={tvFlexContainer({
								direction: "column",
								align: "center",
								justify: "start",
								width: "fill",
								height: "fit",
								class: "gap-3 my-3",
							})}
						>
							<BasicContainer bg="bg-secondary-100">
								<PokemonType type={pokemon?.types[0].type.name} />
								{pokemon?.types[1] && (
									<PokemonType type={pokemon?.types[1].type.name} />
								)}
							</BasicContainer>

							<BasicContainer bg="bg-secondary-100">
								<RulerIcon color="white" size="32" />{" "}
								<p>{alturaEnMetros(pokemon?.height ?? 0)}</p>
							</BasicContainer>

							<BasicContainer bg="bg-secondary-100">
								<WeightIcon color="white" size="32" />
								<p>{pesoEnKilos(pokemon?.weight ?? 0)}</p>
							</BasicContainer>
						</section>

						{/* skills */}
						<section
							className={tvFlexContainer({
								direction: "column",
								align: "start",
								justify: "center",
								width: "fill",
								class: "p-5 gap-3 bg-secondary-100 lg:my-3 rounded-xl",
							})}
						>
							<h2
								className={tvText({
									color: "white",
									size: "bigText",
									weight: "bold",
								})}
							>
								Abilities
							</h2>
							<RenderAbility ability={pokemon?.abilities} />
						</section>
					</div>

					<div>{children}</div>
				</section>
			)}
		</div>
	);
};

export default Index;
