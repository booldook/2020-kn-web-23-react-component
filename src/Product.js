import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'

const Product = (props) => {
	var { src, title, price } = props.value
	return (
		<div className="list">
			<div className="img-wrap">
				<img src={src} className="w-100"/>
			</div>
			<div className="title">{title}</div>
			<div className="price">${price}</div>
		</div>
	)
}

export default Product