import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import Product from './Product'

const Products = (props) => {
	return (
		<div className="list-wrapper">
			{ props.products.map(v => <Product value={v} key={v.id+'_'+v.title}/>) }
		</div>
	)
}

export default Products