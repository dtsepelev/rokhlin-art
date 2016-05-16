import React, { PropTypes } from 'react'

export const Text = ({ description }) => (
  <div>
    {description ?
      description.split('\n').map((text, i) => {
        if (i === 0) {
          return <p className='firstLine'>{text}</p>
        }
        return <p>{text}</p>
      }) : null
    }
  </div>
)

Text.propTypes = {
  description: PropTypes.string,
}