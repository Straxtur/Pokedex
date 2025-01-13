import { tvFlexContainer } from "@styles/variants/container";

const Weaknesses = () => {
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
			Weaknesses
		</section>
	);
};

export default Weaknesses;
