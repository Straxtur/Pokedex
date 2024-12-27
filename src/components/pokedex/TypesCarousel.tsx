import { types } from "@/utils/typesPokemon";
import Marquee from "react-fast-marquee";

const TypesCarousel = () => {
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
				<div key={type.name} className="px-3 py-1 border-white rounded-md">
					<type.icon size="30" />
				</div>
			))}
		</Marquee>
	);
};

export default TypesCarousel;
