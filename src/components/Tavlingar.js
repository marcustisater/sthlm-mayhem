import React from 'react'
import PropTypes from 'prop-types'

import { TavlingarWrapper, 
         TavlingarItem, 
         TavlingarItemContainer, 
         TavlingarItemContainerImage,
         TavlingarReadMore 
        } from './Tavlingar.styles';

const Tavlingar = ({ data }) => (
  <TavlingarWrapper>
    {data.map(price => (
      <TavlingarItem key={price.plan}>
        <TavlingarItemContainer>
          <TavlingarItemContainerImage>
            <img width="250" src="http://www.crossfitsodertorn.se/wp-content/uploads/sites/6/2019/09/Master_Teen_Edit.jpg" />
          </TavlingarItemContainerImage>
          <div>
            <h4 className="has-text-weight-semibold">
            STHLM MAYHEM Master/Teen Edition
            </h4>
            <p>2020-03-28</p>
            <div className="">
              Description text! 
            </div>
            <p className="has-text-weight-semibold"></p>
            <TavlingarReadMore>
              Läs mer!
          </TavlingarReadMore> 
          </div>
        </TavlingarItemContainer>
      </TavlingarItem> 
    ))}
  </TavlingarWrapper>
)

Tavlingar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Tavlingar;
