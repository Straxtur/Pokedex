import { usePokemon } from "@/context/PokemonDataContext";
import ShowStat from "@components/pokemon/ShowStat";
import { tvFlexContainer } from "@styles/variants/container";

const Stats = () => {
	const { pokemon } = usePokemon();

	return (
		<section
			className={tvFlexContainer({
				direction: "column",
				align: "start",
				justify: "center",
				width: "fill",
				height: "fit",
				class: " rounded-2xl bg-secondary-100 p-2 gap-4 overflow-x-hidden",
			})}
		>
			{pokemon?.stats.map(({ base_stat, stat }) => (
				<ShowStat key={stat.name} stat={stat} base_stat={base_stat} />
			))}
		</section>
	);
};

export default Stats;
