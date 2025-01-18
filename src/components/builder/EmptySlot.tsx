import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";

const EmptySlot = () => {
	return (
		<div
			className={tvFlexContainer({
				direction: "column",
				justify: "start",
				align: "center",
				height: "fit",
				width: "fit",
				class:
					"gap-7 pt-4 pb-5 rounded-t-3xl bg-gradient-to-b bg-cover bg-no-repeat filter saturate-150 from-[#060E20] to-green-200",
			})}
		>
			<figure className="p-4">
				<img
					className="filter saturate-200"
					width="120px"
					src="pokeballLogo.png"
					alt="pokeballLogo"
				/>
			</figure>

			<div className="flex flex-col items-center justify-center w-fit h-fit">
				<h3
					className={tvText({
						color: "white",
						align: "center",
						weight: "normal",
						class: "text-3xl uppercase",
					})}
				>
					?????
				</h3>
			</div>
		</div>
	);
};

export default EmptySlot;
