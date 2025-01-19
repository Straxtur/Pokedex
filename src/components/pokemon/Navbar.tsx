import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { Link } from "@tanstack/react-router";

interface props {
	pokeName: string;
	statsRoute?: string | undefined;
	movesRoute?: string | undefined;
	weaknessesRoute?: string | undefined;
	strengthsRoute?: string | undefined;
}

const Navbar: React.FC<props> = ({
	pokeName,
	movesRoute,
	statsRoute,
	weaknessesRoute,
	strengthsRoute,
}) => {
	return (
		<div
			className={`${tvFlexContainer({
				direction: { initial: "column", sm: "row" },
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
			<span className="hidden sm:inline">|</span>
			<Link
				params={{ name: pokeName }}
				to="/pokemon/$name/attacks"
				className={movesRoute ? "text-[#0D9EDF]" : ""}
			>
				Attacks
			</Link>
			<span className="hidden sm:inline">|</span>
			<Link
				params={{ name: pokeName }}
				to="/pokemon/$name/weaknesses"
				className={weaknessesRoute ? "text-[#0D9EDF]" : ""}
			>
				Weaknesses
			</Link>
			<span className="hidden sm:inline">|</span>
			<Link
				params={{ name: pokeName }}
				to="/pokemon/$name/strengths"
				className={strengthsRoute ? "text-[#0D9EDF]" : ""}
			>
				Strengths
			</Link>
		</div>
	);
};

export default Navbar;
