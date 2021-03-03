import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react'

const TitleBar = (props) => {
	return (
		<div className="jumbotron">
			<h1>
				{props.title}
				<br />
				<small>쇼핑몰 검색 | {props.query}</small>
			</h1>
		</div>
	)
}

export default TitleBar