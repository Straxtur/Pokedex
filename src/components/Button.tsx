import { tvButton } from "@styles/variants/buttons";

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
		<button
			className={tvButton({
				class: `${bg}`,
				textColor: textColor,
				border: colorBorder,
			})}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
