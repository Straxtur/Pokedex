import { tvFlexContainer } from "@styles/variants/container";
import type { ReactNode } from "react";

interface props {
	children: ReactNode;
	bg?: string;
}

export const BasicContainer: React.FC<props> = ({ bg, children }) => {
	return (
		<div
			className={tvFlexContainer({
				direction: "row",
				align: "center",
				justify: "center",
				width: "fill",
				height: "fit",
				class: `${bg} gap-3 py-3 rounded-lg`,
			})}
		>
			{children}
		</div>
	);
};
