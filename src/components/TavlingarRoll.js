import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Item, ImageColumn, TextColumn, ItemArticle } from './TavlingarRoll.styles';

import {
    TavlingarTitle
} from './Tavlingar.styles'; 

class TavlingarRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <Item key={post.id}>
              <ItemArticle
                className={`blog-list-item tile is-child box ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <ImageColumn>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </ImageColumn>
                <TextColumn>
                  <p className="post-meta">
                    <TavlingarTitle
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </TavlingarTitle>
                    <span className="datepick subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-red-600 rounded text-lg" to={post.fields.slug}>
                      Läs vidare om tävlingen
                    </Link>  
                  </p>
                </TextColumn>
              </ItemArticle>
            </Item>
          ))}
      </div>
    )
  }
}

TavlingarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TavlingarQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TavlingarRoll data={data} count={count} />}
  />
)
