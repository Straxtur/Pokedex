import { tvButton } from "@styles/variants/buttons";
import { Link } from "@tanstack/react-router";
import { m } from "motion/react";

interface LinkButtonProps {
	children: string;
	textColor: "white" | "black";
	colorBorder?: "white";
	bg?: string;
	route: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
	children,
	textColor,
	colorBorder,
	bg = "transparent",
	route,
}) => {
	return (
		<m.div
			className="h-fit w-fit"
			whileHover={{
				scale: 1.1,
				transition: {
					duration: 0.45,
					bounce: 0.25,
					type: "spring",
				},
			}}
			whileTap={{
				scale: 0.9,
				transition: {
					duration: 0.45,
					bounce: 0.25,
					type: "spring",
				},
			}}
		>
			<Link
				to={route}
				className={tvButton({
					class: `${bg}`,
					textColor: textColor,
					border: colorBorder,
					padding: "default",
				})}
			>
				{children}
			</Link>
		</m.div>
	);
};

export default LinkButton;
