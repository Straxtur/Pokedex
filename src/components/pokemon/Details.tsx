import type { PokemonResponse } from "@/types/pokemonDetails";
import { alturaEnMetros, pesoEnKilos } from "@/utils/formatter";
import { BasicContainer } from "@components/Containers";
import { RulerIcon, WeightIcon } from "@components/Icons";
import PokemonType from "@components/PokemonType";
import { tvFlexContainer } from "@styles/variants/container";

interface DetailsSplashProps {
	pokemon: PokemonResponse | undefined;
}

const Details: React.FC<DetailsSplashProps> = ({ pokemon }) => {
	return (
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
	);
};

export default Details;
