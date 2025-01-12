import type { Types } from "@/types/pokemonTypes";
import { types } from "@/utils/typesPokemon";
import { HouseIcon } from "@components/Icons";
import Marquee from "react-fast-marquee";

interface CarouselProps {
	setType: React.Dispatch<React.SetStateAction<Types>>;
}

const TypesCarousel: React.FC<CarouselProps> = ({ setType }) => {
	const handleChangeType = (type: Types) => {
		setType(type);
	};

	const handleCleanTypes = () => {
		setType(undefined);
	};
	return (
		<section className="flex items-center  max-w-[900px] min-w-72 w-full">
			<button
				onClick={() => handleCleanTypes()}
				type="button"
				className="bg-[#0D9EDF] rounded-s-xl border border-white"
			>
				<div className="transition-transform transform hover:scale-105 active:scale-95">
					<HouseIcon color="white" size="40" />
				</div>
			</button>
			<Marquee
				className="border border-white rounded-e-xl bg-[#24263A] w-full"
				autoFill
				loop={0}
				speed={40}
				pauseOnHover
				gradientColor="#24263A"
				gradientWidth={400}
			>
				{types.map((type) => (
					<button
						onClick={() => handleChangeType(type.name.toLowerCase() as Types)}
						type="button"
						key={type.name}
						className="px-3 py-1 border-white rounded-md"
					>
						<type.icon size="30" />
					</button>
				))}
			</Marquee>
		</section>
	);
};

export default TypesCarousel;
