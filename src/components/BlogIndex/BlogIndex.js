import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Posts from '../Posts';
import SEO from '../SEO';

const BlogIndex = ( { location, posts, siteTitle } ) => (
	<Layout location={ location } title={ siteTitle }>
		<SEO
			title="All posts"
			keywords={ [ `blog`, `gatsby`, `javascript`, `react` ] }
		/>
		<Posts posts={ posts } />
	</Layout>
);

BlogIndex.propTypes = {
	location: PropTypes.object.isRequired,
	posts: PropTypes.array.isRequired,
	siteTitle: PropTypes.string.isRequired,
};

export default React.memo(BlogIndex);
