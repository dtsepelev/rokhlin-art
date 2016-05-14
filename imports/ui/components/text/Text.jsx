import React, { PropTypes } from 'react'

export const Text = ({ description }) => (
  <div>
    {
      description.split('\n').map((text, i) => {
        if (i === 0) {
          return <p className='firstLine'>{text}</p>
        }
        return <p>{text}</p>
      })
    }
  </div>
)

Text.propTypes = {
  description: PropTypes.string.isRequired,
}