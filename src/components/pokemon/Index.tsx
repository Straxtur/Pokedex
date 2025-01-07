import { useSinglePokemonQuery } from "@api/queries/useSinglePokemonQuery";
import type { ReactNode } from "react";

interface props {
	children: ReactNode;
	pokeName: string;
}

const Index: React.FC<props> = ({ children, pokeName }) => {
	const {
		pokemonQuery: { data, error, isSuccess },
	} = useSinglePokemonQuery({ pokeName });

	if (error) {
		console.error(error.message);
	}

	if (isSuccess) {
		console.log(data);
	}

	return (
		<section className="bg-black  text-white w-full h-[300px]">
			<h1>soy el comun: {pokeName}</h1>
			{children}
		</section>
	);
};

export default Index;
