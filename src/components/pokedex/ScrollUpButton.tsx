import Button from "@components/Button";
import { CaretUpIcon } from "@components/Icons";

interface ScrollUpProps {
	scrollUp: () => void;
}

const ScrollUpButton: React.FC<ScrollUpProps> = ({ scrollUp }) => {
	return (
		<div
			className="sticky flex justify-end w-full bottom-5 right-5"
			style={{ alignSelf: "flex-end" }}
		>
			<Button
				onClick={scrollUp}
				type="button"
				textColor="white"
				bg="bg-[#0D9EDF]"
			>
				<CaretUpIcon color="white" size="40" />
			</Button>
		</div>
	);
};

export default ScrollUpButton;
