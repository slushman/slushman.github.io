import React from 'react';

import Post from '../Post';
import {
	latestPost,
	latestPostWrap,
} from './latest-post.styles';

const LatestPost = ( {
	date,
	excerpt,
	featuredImage,
	slug,
	title,
} ) => (
	<div css={ latestPostWrap }>
		<Post
			css={ latestPost }
			date={ date }
			excerpt={ excerpt }
			image={ featuredImage }
			key={ slug }
			slug={ slug }
			title={ title || slug }
		/>
	</div>
)

export default React.memo(LatestPost);
