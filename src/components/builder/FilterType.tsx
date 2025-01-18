const FilterType = () => {
	return (
		<label>
			Pick a label
			<select className="bg-red-200" name="types">
				<option value="all">All</option>
				<option value="fire">Fire</option>
			</select>
		</label>
	);
};

export default FilterType;
