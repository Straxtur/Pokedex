import Search from "@components/Search";
import FooterWave from "@components/home/FooterWave";
import Hero from "@components/home/Hero";
import { tvFlexContainer } from "@styles/variants/container";

const Home = () => {
	return (
		<main
			className={tvFlexContainer({
				direction: "column",
				width: "fill",
				height: "fill",
				justify: "center",
				align: "center",
				class: "pt-5 min-w-[320px]",
			})}
		>
			<Hero />

			<Search bg="bg-secondary-200" />

			<FooterWave />
		</main>
	);
};

export default Home;
