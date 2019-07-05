import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import useSiteMetadata from '../../hooks/UseSiteMetadata';
import LatestPost from './LatestPost';

const QueryLatestPost = ( { isHeader } ) => {
  const { avatar } = useStaticQuery( bioQuery );
  const { author } = useSiteMetadata();

  return (
    <LatestPost
      author={ author }
      avatar={ avatar }
      isHeader={ isHeader }
    />
  )
};

const bioQuery = graphql`
  query LatestPostQuery {
    allMdx(limit: 1, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 1200) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`;

QueryLatestPost.propTypes = {
  isHeader: PropTypes.bool,
};

QueryLatestPost.defaultProps = {
  isHeader: false,
};

export default QueryLatestPost;
