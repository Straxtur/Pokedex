import LinkButton from "@components/LinkButton";
import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import { m } from "motion/react";
import type React from "react";

interface HeroProps {
	headerClass?: string;
}

const Hero: React.FC<HeroProps> = ({ headerClass }) => {
	return (
		<header
			className={tvFlexContainer({
				direction: { initial: "column", lg: "row" },
				width: "fill",
				height: "fit",
				justify: "center",
				align: "center",
				class: `gap-4 ${headerClass}`,
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
					height: "fit",
					justify: "start",
					align: { initial: "center", lg: "start" },
					order: { initial: "o2", lg: "o1" },
					class: "gap-4 p-3",
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
					Discover the Pokemon World
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
					Explore, Battle, and Become a Pokemon Master
				</p>

				<nav
					className={tvFlexContainer({
						direction: "row",
						width: "fit",
						height: "fit",
						justify: "center",
						align: "center",
						class: "gap-4 p-5",
					})}
				>
					<LinkButton
						route="/pokemon"
						textColor="white"
						bg={"bg-secondary-200"}
					>
						Pokedex
					</LinkButton>

					<LinkButton
						route="/teamBuilder"
						colorBorder="white"
						textColor="white"
					>
						Team Builder
					</LinkButton>
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
				className="order-1 lg:order-2"
			>
				<img
					className="pt-20 lg:p-0 filter saturate-200 w-80"
					src="greninja-hero.png"
					alt="greninja"
					draggable="false"
				/>
			</m.figure>
		</header>
	);
};

export default Hero;
