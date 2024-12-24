import FooterWave from "@components/home/FooterWave";
import Hero from "@components/home/Hero";
import Search from "@components/home/Search";
import { tvFlexContainer } from "@styles/variants/container";

const Home = () => {
	return (
		<main
			className={tvFlexContainer({
				direction: "column",
				width: "fill",
				height: "fit",
				justify: "center",
				align: "center",
				class: "pt-5 min-w-[320px]",
			})}
		>
			<Hero />

			<Search />

			<FooterWave />
		</main>
	);
};

export default Home;
