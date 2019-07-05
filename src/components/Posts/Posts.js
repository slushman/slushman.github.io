import React from 'react';

import { postsWrap } from '../BlogIndex/blog-index-styles';
import Post from '../Post';

const Posts = ( { posts } ) => (
	<div css={ postsWrap }>
		{ posts.map( ( { node } ) => {
			return (
				<Post
					date={ node.frontmatter.date }
					excerpt={ node.excerpt }
					image={ node.frontmatter.featuredImage }
					key={ node.fields.slug }
					slug={ node.fields.slug }
					title={ node.frontmatter.title || node.fields.slug }
				/>
			)
		} ) }
	</div>
)

export default Reacto.memo(Posts);
