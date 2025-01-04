import { useCurrentPage } from "@/context/context";
import type { AllPokemonData } from "@/types/pokemonFetch";
import Button from "@components/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@components/Icons";
import { tvFlexContainer } from "@styles/variants/container";
import type {
	InfiniteData,
	InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useCallback } from "react";

interface PaginationButtonsProps {
	nextPage: () => Promise<
		InfiniteQueryObserverResult<InfiniteData<AllPokemonData, unknown>, Error>
	>;
	prevPage: () => Promise<
		InfiniteQueryObserverResult<InfiniteData<AllPokemonData, unknown>, Error>
	>;
	isFetchingNextPage: boolean;
	isFetchingPreviousPage: boolean;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	pages: AllPokemonData[] | undefined;
	search: React.Dispatch<React.SetStateAction<string>>;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
	nextPage,
	prevPage,
	isFetchingNextPage,
	isFetchingPreviousPage,
	hasNextPage,
	hasPreviousPage,
	pages,
	search,
}) => {
	const { currentPage, setCurrentPage } = useCurrentPage();

	const handleNextPage = useCallback(async () => {
		if (currentPage === 51) return; // fin pagination

		if (pages?.find((page) => page.page === currentPage + 1)) {
			search("");
			return setCurrentPage((prev) => prev + 1);
		}
		await nextPage();
		setCurrentPage((prev) => prev + 1);
	}, [currentPage, nextPage, pages, search, setCurrentPage]);

	const handlePrevPage = useCallback(async () => {
		if (pages?.find((page) => page.page === currentPage - 1)) {
			search("");
			return setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
		}
		await prevPage();
		setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
	}, [currentPage, pages, prevPage, search, setCurrentPage]);

	return (
		<div
			className={tvFlexContainer({
				direction: "row",
				align: "center",
				justify: "center",
				width: "fit",
				height: "fit",
				class: "gap-5",
			})}
		>
			{pages && (
				<>
					<Button
						isDisabled={!hasPreviousPage || isFetchingPreviousPage}
						textColor="white"
						bg="transparent"
						onClick={handlePrevPage}
						padding="none"
						shapeButton="border-2 border-white rounded-e-sm"
					>
						<ArrowLeftIcon color="white" size="30" />
					</Button>

					<span className="text-white">{currentPage} / 51</span>

					<Button
						isDisabled={
							!hasNextPage || isFetchingNextPage || currentPage === 51
						}
						textColor="white"
						bg="transparent"
						onClick={handleNextPage}
						padding="none"
						shapeButton="border-2 border-white rounded-s-sm"
					>
						<ArrowRightIcon color="white" size="30" />
					</Button>
				</>
			)}
		</div>
	);
};

export default PaginationButtons;
