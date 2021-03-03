import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Title = styled.div`
	margin-top: 2em;
`


const TitleBar = (props) => {
	return (
		<Title className="jumbotron">
			<h1>
				{props.title}
				<br />
				<small>쇼핑몰 검색 | {props.query}</small>
			</h1>
		</Title>
	)
}

export default TitleBar