import { tvFlexContainer } from "@styles/variants/container";
import { tvText } from "@styles/variants/text";
import LinkButton from "./LinkButton";

const NotFound: React.FC<{ message: string | undefined }> = ({
	message = "A ocurrido un error en la aplicación",
}) => {
	return (
		<div
			className={tvFlexContainer({
				direction: "column",
				justify: "center",
				align: "center",
				height: "fill",
				width: "fill",
				class: "min-h-fit gap-4 p-5 text-white bg-red-500",
			})}
		>
			<figure>
				<img
					width="100px"
					src="/pikachu_triste.png"
					alt="Imagen de un Pikachu triste"
				/>
			</figure>
			<h1
				className={tvText({
					color: "white",
					weight: "bold",
					class: "text-xl",
				})}
			>
				Error
			</h1>
			<p>{message}</p>
			<LinkButton route="/" textColor="white" bg="bg-secondary-100">
				Volver al Inicio
			</LinkButton>
		</div>
	);
};

export default NotFound;
