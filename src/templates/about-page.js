import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient section-padding">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="is-size-3 has-text-weight-bold is-bold-light mb-20">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>

            <section class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="flex w-full mb-20 flex-wrap">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-2/3 lg:mb-0 mb-4">Bilder från tidigare tävlingar</h1>
              </div>
              <div class="flex flex-wrap md:-m-2 -m-1">
                <div class="flex flex-wrap w-1/2">
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/img/img-gallery-6.jpg" />
                  </div>
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/img/img-gallery-5.jpg" />
                  </div>
                  <div class="md:p-2 p-1 w-full">
                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="/img/img-gallery-4.jpg" />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="md:p-2 p-1 w-full">
                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="/img/img-gallery-3.jpg" />
                  </div>
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/img/img-gallery-2.jpg" />
                  </div>
                  <div class="md:p-2 p-1 w-1/2">
                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/img/img-gallery-1.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          </div>
        </div>
      </div>

      
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
