import type React from "react";
import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

export interface CurrentPageContextType {
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const PokedexCurrentPageContext = createContext<
	CurrentPageContextType | undefined
>(undefined);

interface CurrentPageProviderProps {
	children: ReactNode;
}

export const CurrentPageProvider: React.FC<CurrentPageProviderProps> = ({
	children,
}) => {
	const [currentPage, setCurrentPage] = useState<number>(0); // valor inicial como 0

	return (
		<PokedexCurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</PokedexCurrentPageContext.Provider>
	);
};

export const useCurrentPage = (): CurrentPageContextType => {
	const context = useContext(PokedexCurrentPageContext);

	if (!context) {
		throw new Error("useCurrentPage must be used within a CurrentPageProvider");
	}

	const { currentPage, setCurrentPage } = context;
	return { currentPage, setCurrentPage };
};
