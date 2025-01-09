import { tvFlexContainer } from "@styles/variants/container";
import type { ReactNode } from "react";

interface props {
	children: ReactNode;
	bg?: string;
	direction?: "row" | "column";
	clss?: string;
}

export const BasicContainer: React.FC<props> = ({
	bg,
	children,
	direction = "row",
	clss,
}) => {
	return (
		<div
			className={tvFlexContainer({
				direction: direction,
				align: "center",
				justify: "center",
				width: "fill",
				height: "fit",
				class: `${bg} gap-3 py-3 rounded-lg ${clss}`,
			})}
		>
			{children}
		</div>
	);
};
