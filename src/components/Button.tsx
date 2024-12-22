import { tvButton } from "@styles/variants/buttons";
import { motion as m } from "framer-motion";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	children: string;
	textColor: "white" | "black";
	colorBorder?: "white";
	bg?: string;
}

const Button: React.FC<ButtonProps> = ({
	type = "button",
	children,
	textColor,
	colorBorder,
	bg = "transparent",
}) => {
	return (
		<m.button
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
			className={tvButton({
				class: `${bg}`,
				textColor: textColor,
				border: colorBorder,
			})}
			type={type}
		>
			{children}
		</m.button>
	);
};

export default Button;
