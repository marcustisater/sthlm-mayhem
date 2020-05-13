import React from 'react'

import Layout from '../../components/Layout'
import TavlingarRoll from '../../components/TavlingarRoll'

import Sponsors from '../../components/Sponsors';

import '../../components/test.css';
import { Parallax } from 'react-parallax';

export default class BlogIndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <section className="section section-padding">
          <div className="container">

            <div class="text-center mb-40">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Aktuella tävlingar</h1>
              <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            </div>

            <div className="content container--small">
              <TavlingarRoll />
            </div>
          </div>
        </section>

        <Sponsors />
      </Layout>
    )
  }
}
