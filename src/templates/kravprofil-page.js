import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const KravProfilPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient section-padding">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className= "content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

KravProfilPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const KravProfilPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <KravProfilPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

KravProfilPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default KravProfilPage

export const kravProfilPageQuery = graphql`
  query KravProfilPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
