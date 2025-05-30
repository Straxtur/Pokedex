import { m } from "motion/react";

interface FooterProps {
	headerClass?: string;
}

const FooterWave: React.FC<FooterProps> = ({ headerClass }) => {
	return (
		<footer
			className={`relative w-full h-[200px] pt-40  overflow-hidden min-h-[100px] ${headerClass}`}
		>
			<m.svg
				initial={{ y: 0 }}
				animate={{ y: [0, 15, 0] }}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "loop",
					ease: "easeInOut",
				}}
				className="absolute bottom-0 w-full h-fit mac"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path
					fill="#14142B"
					fillOpacity="1"
					d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				/>
			</m.svg>
		</footer>
	);
};

export default FooterWave;
