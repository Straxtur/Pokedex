import type { StylesConfig } from "react-select";
type OptionType = { value: string; label: string };

export const customStyles: StylesConfig<OptionType, boolean> = {
	control: (provided) => ({
		...provided,
		backgroundColor: "#2c2c54",
		color: "#ffffff",
		border: "1px solid #4b4b8c",
		borderRadius: "8px",
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: "#2c2c54",
		borderRadius: "8px",
	}),
	singleValue: (provided) => ({
		...provided,
		color: "#ffffff",
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isFocused ? "#0D9EDF" : "#2c2c54", // Color de fondo al hacer hover
		color: state.isFocused ? "#ffffff" : "#d1d1d1", // Color del texto al hacer hover
		cursor: "pointer",
	}),
	input: (provided) => ({
		...provided,
		color: "#ffffff", // Color del texto en el input de búsqueda
	}),
	placeholder: (provided) => ({
		...provided,
		color: "#d1d1d1", // Color del placeholder
	}),
};
