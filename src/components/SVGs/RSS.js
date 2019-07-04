import React from 'react';
import PropTypes from 'prop-types';

const RSS = ( { height, width } ) => {
	return (
		<svg
			aria-labelledby="title"
			height={ height }
			viewBox="0 0 32 32"
			width={ width }
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>RSS icon</title>
			<path 
				d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"
			/>
		</svg>
	);
};

RSS.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

RSS.defaultProps = {
	width: 36,
	height: 36,
}

export default React.memo(RSS);
