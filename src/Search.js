import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'

const Search = (props) => {
	const [query, setQuery] = useState('')
	const inputRef = useRef(null)
	
	const handleChange = e => {
		onChange(e.target.value)
	}
	const handleRemove = e => {
		onChange('')
		inputRef.current.focus()
	}
	const onChange = value => {
		props.onChange(value)
		setQuery(value)
	}
	return (
		<form className="form-search">
			<input className="form-control py-2" type="text" onChange={handleChange} autoFocus value={query} ref={inputRef} />
			{
				query.length > 0
				? <i className="fa fa-times-circle bt-remove" onClick={handleRemove} />
				: ''
			}
		</form>
	)
}

export default Search