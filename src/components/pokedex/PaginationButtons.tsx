import { useCurrentPage } from "@/context/context";
import type { AllPokemonData } from "@/types/pokemonFetch";
import Button from "@components/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@components/Icons";
import { tvFlexContainer } from "@styles/variants/container";
import type {
	InfiniteData,
	InfiniteQueryObserverResult,
} from "@tanstack/react-query";

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
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
	nextPage,
	prevPage,
	isFetchingNextPage,
	isFetchingPreviousPage,
	hasNextPage,
	hasPreviousPage,
	pages,
}) => {
	const { currentPage, setCurrentPage } = useCurrentPage();

	const handleNextPage = async () => {
		if (currentPage === 51) return; // fin pagination

		if (pages?.find((page) => page.page === currentPage + 1)) {
			setCurrentPage((prev) => prev + 1);
			return;
		}
		await nextPage();
		setCurrentPage((prev) => prev + 1);
	};

	const handlePrevPage = async () => {
		if (pages?.find((page) => page.page === currentPage - 1)) {
			return setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
		}
		await prevPage();
		setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
	};

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
