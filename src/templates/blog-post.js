import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { useTrail, animated } from 'react-spring'
import '../components/test.css';
import { Parallax } from 'react-parallax';
import { Wrapper } from './tavling-styles-page';
import Sponsors from '../components/sponsors';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  const items = ['Stockholm mayhem', 'Teen/Master Edition', '2020-03-28 ']
  const config = { mass: 10, tension: 400, friction: 250 }

  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })


  return (
    <Layout>
      <section>
        {helmet || ''}

        <Parallax
            bgImage={'/img/placeholder-tavling.jpg'}
            bgImageAlt="the cat"
            strength={250}
            className="full-width-image-container margin-top-0 full-width-image--left"
        >
      
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                color: 'white',
                padding: '1rem 1.5rem',
                background: 'rgba(40,41,45,0.6)',
                marginLeft: '100px'
              }}
            >
                <div className="trails-main">
                <div>
                  {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                      key={items[index]}
                      className="trails-text"
                      style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                      <animated.div style={{ height }}>{items[index]}</animated.div>
                    </animated.div>
                  ))}
                </div>
              </div>
            </h1>
          </Parallax>
      
        <Wrapper className="container--small content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <p>{title}</p>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </Wrapper>
      </section>

      <section class="text-gray-700 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?q=CrossFit%20S%C3%B6dert%C3%B6rn&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Plats:</h2>
          <p class="leading-relaxed mb-5 text-gray-600">CrossFit Södertörn Hantverkargatan 5 </p>

          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Tid:</h2>
          <p class="leading-relaxed mb-5 text-gray-600">09:00 - 17:00</p>
        </div>
      </div>
    </section>


      <Sponsors />

    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
