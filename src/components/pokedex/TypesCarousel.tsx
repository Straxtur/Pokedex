import type { Types } from "@/types/pokemonTypes";
import { types } from "@/utils/typesPokemon";
import Marquee from "react-fast-marquee";

interface CarouselProps {
	setType: React.Dispatch<React.SetStateAction<Types>>;
}

const TypesCarousel: React.FC<CarouselProps> = ({ setType }) => {
	const handleChangeType = (type: Types) => {
		setType(type);
	};
	return (
		<Marquee
			className="border border-white rounded-lg max-w-[900px] min-w-72 bg-[#24263A]"
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
	);
};

export default TypesCarousel;
