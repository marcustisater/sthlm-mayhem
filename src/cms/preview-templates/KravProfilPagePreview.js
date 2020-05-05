import React from 'react'
import PropTypes from 'prop-types'
import { KravProfilPageTemplate } from '../../templates/kravprofil-page'

const KravProfilPagePreview = ({ entry, widgetFor }) => (
  <KravProfilPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

KravProfilPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default KravProfilPagePreview
 