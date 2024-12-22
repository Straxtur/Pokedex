import Button from "@components/Button";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { motion as m } from "framer-motion";

const Hero = () => {
	return (
		<header
			className={tvFlexContainer({
				direction: "column",
				width: "fill",
				heigth: "fit",
				justify: "center",
				align: "center",
				class: "lg:flex-row gap-4",
			})}
		>
			<m.section
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{
					duration: 2,
					bounce: 0.2,
					type: "spring",
				}}
				className={tvFlexContainer({
					direction: "column",
					width: "fit",
					heigth: "fit",
					justify: "start",
					align: "center",
					class:
						"order-2 gap-4 p-3 lg:items-start lg:order-1 lg:w-fit lg:h-fit",
				})}
			>
				<h1
					className={tvText({
						color: "white",
						weight: "bold",
						align: "center",
						size: "h1",
					})}
				>
					Descubre el mundo Pokemon
				</h1>

				<p
					className={tvText({
						color: "white",
						weight: "small",
						align: "center",
						size: "bigText",
						class: "h-fit",
					})}
				>
					Explora, Combate y conviertete en un maestro Pokemon
				</p>

				<nav
					className={tvFlexContainer({
						direction: "row",
						width: "fit",
						heigth: "fit",
						justify: "center",
						align: "center",
						class: "gap-4 p-5",
					})}
				>
					<Button textColor="white" bg={"bg-secondary-200"}>
						Pokedex
					</Button>

					<Button colorBorder="white" textColor="white">
						Team Builder
					</Button>
				</nav>
			</m.section>

			<m.figure
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{
					duration: 2,
					bounce: 0.2,
					type: "spring",
				}}
				className="order-1 h-full w-fit lg:order-2"
			>
				<img
					className="filter saturate-200 w-80"
					src="greninja-hero.png"
					alt="greninja"
				/>
			</m.figure>
		</header>
	);
};

export default Hero;
