import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import '../components/animate.css';

import Sponsors from '../components/Sponsors';

import VideoLink from '../img/background-video.mp4';

import {
      Video,
      VideoContainer, 
      Hero, 
      HeroImage, 
      VideoWrapper, 
    } from './index-page.styles';

import Layout from '../components/Layout'
import TavlingarRoll from '../components/TavlingarRoll'

export const IndexPageTemplate = ({
  mainpitch,
  faq
}) => (
  <div>
    <Hero>
      <HeroImage />
      
      <VideoContainer>  
        <VideoWrapper>
          <Video muted playsinline autoPlay>
            <source src={VideoLink} type="video/mp4" />
          </Video>
        </VideoWrapper>
      </VideoContainer>
    </Hero>

    <section className="section section--gradient">
  
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {mainpitch.title}
              <p class="hidden lg:inline-block"> {mainpitch.title2}</p>
            </h1>
            <p class="mb-8 leading-relaxed">{mainpitch.description}</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{mainpitch.buttonprimary}</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>

      <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          {faq.title}
        </h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{faq.faq1title}</h2>
              <p class="leading-relaxed text-base">{faq.faq1description}</p>
              <a href={faq.faq1link} class="mt-3 text-indigo-500 inline-flex items-center">Läs vidare
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{faq.faq2title}</h2>
              <p class="leading-relaxed text-base">{faq.faq2description}</p>
              <a href={faq.faq2link} class="mt-3 text-indigo-500 inline-flex items-center">Läs vidare
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{faq.faq3title}</h2>
              <p class="leading-relaxed text-base">{faq.faq3description}</p>
              <a href={faq.faq3link} class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> 
            </div>
          </div>
        </div>
      </div>
    </section>      

      <div class="container">
      
        <div className="column is-12">
          <div className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Aktuella tävlingar</div>
          <TavlingarRoll />
          <div className="column is-12 has-text-centered">
            <Link className="button" to="/blog">
              Kolla in fler tävlingar 
            </Link>
          </div>
        </div>
      </div>
      
    </section>

    <Sponsors />
    
  </div>
  
)

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  faq: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        faq={frontmatter.faq}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          title2
          description
          primarybutton
        }
        faq {
          title
          faq1title
          faq1description
          faq1link
          faq2title 
          faq2description
          faq2link
          faq3title
          faq3description
          faq3link
        }
      }
    }
  }
`
