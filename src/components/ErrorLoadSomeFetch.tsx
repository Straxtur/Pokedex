interface Props {
	message: string;
}

const ErrorLoadSomeFetch: React.FC<Props> = ({ message }) => {
	return (
		<div className="flex items-center justify-center w-full h-16 text-xl text-red-300 bg-secondary-100 rounded-xl">
			<p>{message}</p>
		</div>
	);
};

export default ErrorLoadSomeFetch;
