import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Layout from '../Layout';
import Posts from '../../components/Posts';
import SEO from '../SEO';
import {
	categoryHeader,
	categoryTitle,
	viewCategories,
} from './category-list-styles';

const CategoryList = ( { category, location, posts, siteTitle, total } ) => {
	const plural = total === 1 ? '' : 's';
  const categoryName = `${ category } post${ plural }`;

  return (
		<Layout isPost={ true } location={ location } title={ siteTitle }>
			<section css={ categoryHeader }>
				<h1 css={ categoryTitle }>{ categoryName }</h1>
			</section>
			<Posts posts={ posts } />
			<h2 css={ viewCategories }>
				<Link to="/category">View all categories</Link>
			</h2>
 		</Layout>
  )
};

CategoryList.propTypes = {
	category: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
	posts: PropTypes.arrayOf(
		PropTypes.shape( {
			node: PropTypes.shape( {
				frontmatter: PropTypes.shape( {
					date: PropTypes.string.isRequired,
					title: PropTypes.string.isRequired,
				} ),
				fields: PropTypes.shape( {
					slug: PropTypes.string.isRequired,
				} ),
			} ),
		} ).isRequired
	),
	siteTitle: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired,
};

export default React.memo(CategoryList);
