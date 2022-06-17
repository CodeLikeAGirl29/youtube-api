import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		// Call callback from parent component
		onFormSubmit(term);
	};

	return (
		<div className='ui segment'>
			<form className='ui form' onSubmit={onSubmit}>
				<div className='field'>
					<h1 className='heading'>Search with YouTube</h1>
					<label></label>
					<input
						type='text'
						className='search-field'
						value={term}
						placeholder='Search'
						onChange={(event) => setTerm(event.target.value)}
					/>
					<button type='submit' className='search-button'>
						<i class='fas fa-search'></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
