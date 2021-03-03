import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import styled from 'styled-components'

const List = styled.div`
	width: 24%; 
	margin: 0.5%; 
	border: 1px solid #ccc; 
	padding: 0.5em;
	@media screen and (max-width: 991px) {
		width: 32.3333%; 
		margin: 0.5%;
	}
	@media screen and (max-width: 767px) {
		width: 48%; 
		margin: 1%;
	}
	@media screen and (max-width: 575px) {
		width: 98%; 
		margin: 1%;
	}
`
const Title = styled.div`
	padding: 0.5em 0; font-size: 1.25em; border-bottom: 1px solid #ccc;	
`

const Price = styled.div`
	padding: 0.5em 0; text-align: right; color:#065786;
`

const Product = (props) => {
	var { src, title, price } = props.value
	return (
		<List>
			<div>
				<img src={src} className="w-100" />
			</div>
			<Title>{title}</Title>
			<Price>${price}</Price>
		</List>
	)
}

export default Product