import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import axios from 'axios'

import Search from './Search'
import TitleBar from './TitleBar'
import Products from './Products'

const App = (props) => {
	var title = 'React 쇼핑몰'
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState([])
	const [resultProducts, setResultProducts] = useState([])

	useEffect(async () => {
		try {
			var { data } = await axios.get('../json/products.json')
			setProducts(data)
			setResultProducts(data)
		}
		catch(e) {
			console.log(e)
		}
	}, [])

	const commitChange = value => {
		setQuery(value)
		setResultProducts(products.filter(v => v.title.includes(value)))
	}

	return (
		<div className="container">
			<TitleBar query={query} title={title} className="my-4" />
			<Search onChange={commitChange} />
			<Products products={resultProducts} />
		</div>
	)
}

export default App;
