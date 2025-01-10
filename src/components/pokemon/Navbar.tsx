import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { Link } from "@tanstack/react-router";

interface props {
	pokeName: string;
	statsRoute?: string | undefined;
	movesRoute?: string | undefined;
	weaknessesRoute?: string | undefined;
}

const Navbar: React.FC<props> = ({
	pokeName,
	movesRoute,
	statsRoute,
	weaknessesRoute,
}) => {
	return (
		<div
			className={`${tvFlexContainer({
				direction: "row",
				align: "center",
				justify: "center",
				width: "fit",
				height: "fit",
				class: "gap-7 py-4",
			})} ${tvText({
				color: "white",
				weight: "bold",
				size: "bigText",
			})}`}
		>
			<Link
				params={{ name: pokeName }}
				to="/pokemon/$name/stats"
				className={statsRoute ? "text-[#0D9EDF]" : ""}
			>
				Stats
			</Link>
			<span>|</span>
			<Link
				params={{ name: pokeName }}
				to="/pokemon/$name/movimientos"
				className={movesRoute ? "text-[#0D9EDF]" : ""}
			>
				Attacks
			</Link>
			<span>|</span>
			<Link
				params={{ name: pokeName }}
				to="/pokemon/$name/debilidades"
				className={weaknessesRoute ? "text-[#0D9EDF]" : ""}
			>
				weaknesses
			</Link>
		</div>
	);
};

export default Navbar;
