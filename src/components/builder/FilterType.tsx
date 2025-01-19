import type { Types } from "@/types/pokemonTypes";
import { pokemonTypesSelect, type typesSelect } from "@/utils/typesPokemon";
import { customStyles } from "@styles/select/TypesSelect";
import Select, { type SingleValue } from "react-select";

interface Props {
	setType: React.Dispatch<React.SetStateAction<Types>>;
}

const FilterType: React.FC<Props> = ({ setType }) => {
	const handleChangeType = (selectedOption: SingleValue<typesSelect>) => {
		if (selectedOption) {
			setType(
				selectedOption.value === "all"
					? undefined
					: (selectedOption.value as Types),
			);
		}
	};

	return (
		<Select
			onChange={(e) => handleChangeType(e as SingleValue<typesSelect>)}
			isSearchable
			className="w-[250px] sm:w-[300px]"
			options={pokemonTypesSelect}
			defaultValue={pokemonTypesSelect[0]}
			styles={customStyles}
		/>
	);
};

export default FilterType;
