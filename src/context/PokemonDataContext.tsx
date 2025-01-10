import type { PokemonResponse } from "@/types/pokemonDetails";
import type React from "react";
import { type ReactNode, createContext, useContext } from "react";

interface PokemonContextProps {
	pokemon: PokemonResponse | null;
	children: ReactNode;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(
	undefined,
);

export const PokemonProvider: React.FC<PokemonContextProps> = ({
	pokemon,
	children,
}) => {
	return (
		<PokemonContext.Provider value={{ pokemon, children }}>
			{children}
		</PokemonContext.Provider>
	);
};

export const usePokemon = () => {
	const context = useContext(PokemonContext);
	if (!context) {
		throw new Error("usePokemon must be used within a PokemonProvider");
	}
	return context;
};
