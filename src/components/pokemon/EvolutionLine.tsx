import { useHowToEvolved } from "@/hooks/useHowToEvolved";
import type { EvolutionLine } from "@/types/pokemonFetch";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import type { useNavigate } from "@tanstack/react-router"; // Importa useNavigate

interface EvolutionLineSplashProps {
	evolution: EvolutionLine;
	navigate: ReturnType<typeof useNavigate>;
}

const PokemonEvolution: React.FC<EvolutionLineSplashProps> = ({
	evolution,
	navigate,
}) => {
	return (
		<div
			className={tvFlexContainer({
				direction: "row",
				align: "center",
				justify: "center",
				width: "fit",
				height: "fit",
			})}
			key={evolution.name}
		>
			<div
				className={tvFlexContainer({
					align: "center",
					justify: "center",
					width: "fit",
					height: "fit",
				})}
			>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					onClick={() =>
						navigate({
							to: "/pokemon/$name/stats",
							params: { name: evolution.name },
						})
					}
					className={tvFlexContainer({
						direction: "row",
						align: "center",
						justify: "center",
						width: "fit",
						height: "fit",
						class: "gap-4 hover:cursor-pointer",
					})}
				>
					{evolution.evolution_details.length > 0 &&
						useHowToEvolved(evolution.evolution_details[0])}

					{/* pokemon + name */}
					<div className="flex flex-col items-center p-5">
						<img width="50px" src={evolution.image} alt={evolution.name} />
						<span
							className={tvText({
								size: "buttonText",
								class: "uppercase",
							})}
						>
							{evolution.name}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonEvolution;
