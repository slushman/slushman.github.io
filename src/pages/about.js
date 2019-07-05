import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/UseSiteMetadata';
import AboutPage from '../components/AboutPage';

const QueryAbout = ( { data: { allMdx: { group } } } ) => {
  const { siteTitle } = useSiteMetadata();
  
	return (
		<AboutPage
			title={ siteTitle }
		/>
	)
};

QueryAbout.propTypes = {
  data: PropTypes.shape( {
    allMdx: PropTypes.shape( {
      group: PropTypes.arrayOf(
        PropTypes.shape( {
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        } ).isRequired
      ),
    } ),
  } ),
};

export default QueryAbout;

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
