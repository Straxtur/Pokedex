import { tvButton } from "@styles/variants/buttons";
import { m } from "motion/react";
interface ButtonProps {
	type?: "button" | "submit" | "reset";
	children: React.ReactNode;
	textColor: "white" | "black";
	colorBorder?: "white";
	bg?: string;
	padding?: "none" | "default";
	isDisabled?: true | false;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	type = "button",
	children,
	textColor = "white",
	colorBorder,
	bg = "transparent",
	padding = "none",
	isDisabled = false,
	onClick,
}) => {
	return (
		<m.button
			onClick={onClick}
			disabled={isDisabled}
			whileHover={
				!isDisabled
					? {
							scale: 1.1,
							transition: {
								duration: 0.45,
								bounce: 0.25,
								type: "spring",
							},
						}
					: {}
			}
			whileTap={
				!isDisabled
					? {
							scale: 0.9,
							transition: {
								duration: 0.45,
								bounce: 0.25,
								type: "spring",
							},
						}
					: {}
			}
			className={tvButton({
				textColor: textColor,
				border: colorBorder,
				padding: padding,
				class: `${bg}`,
			})}
			type={type}
		>
			{children}
		</m.button>
	);
};

export default Button;
