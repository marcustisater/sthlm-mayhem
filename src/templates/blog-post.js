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
import Sponsors from '../components/Sponsors';

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

          <section class="text-gray-700 body-font mb-10">
            <div class="container px-5 pt-20 mx-auto">

              <div class="float-right">
                 <img class="float-right mb-5" width="300" src="/img/mix.jpg" />
                 <p>Datum: XXXXX </p>
                 <p>Pris: XXXX</p>
                 <p>Antal platser: 48</p>
                 <button class="mt-6 flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-red-500 rounded text-lg">Registrera</button>
              </div>
              
              <div>
                <Wrapper> 
                  <div className="columns">
                    <div className="column is-10 is-offset-1">
                      <div class="lg:pr-0 pr-0 mb-20">
                        <h1 class="title-font font-bold text-black text-4xl mt-0">{title}</h1>
                        <p class="leading-relaxed mt-4">En kort beskrivning av tävlingen.</p>
                      </div>
                      
                      <div class="mb-10">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mt-0">Information angående tävlingen</h1>
                      </div>
                      <div class="content">
                        <p>{title}</p>
                        <p>{description}</p>
                        <PostContent content={content} />
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </div>
            </div>
          </section>

          <section class="text-gray-700 body-font mb-40">
          <div class="container px-5 pt-20 mx-auto">
            <div class="text-center mb-20">
              <span class="emoji-size">🤝</span>
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Kravprofil</h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">För den här tävlingen bör du behärska följande övningar och vikter</p>
            </div>

            <h2 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Herr</h2>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">1RM 80kg/60kg clean and jerk</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded  bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Double unders</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Muscle up</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">1RM 50/35kg Snatch</span>
                </div>
              </div>
            </div>

            <h2 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 mt-10">Dam</h2>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">1RM 80kg/60kg clean and jerk</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded  bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Double unders</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">Muscle up</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div class="rounded bg-white flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium">1RM 50/35kg Snatch</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </section>

      <section class="text-gray-700 py-24 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?q=CrossFit%20S%C3%B6dert%C3%B6rn&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
      </div> 
      <div class="container px-5 pt-20 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Plats:</h2>
          <p class="leading-relaxed mb-5 text-gray-600">CrossFit Södertörn Hantverkargatan 5 </p>

          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Tid:</h2>
          <p class="leading-relaxed mb-5 text-gray-600">09:00 - 17:00</p>
        </div>
      </div>
    </section>

      <section id="register" class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Redo att tävla? 👊</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 justify-center">
            <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Registrera dig här</button>
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
