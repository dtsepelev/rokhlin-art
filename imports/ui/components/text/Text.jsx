import React, { PropTypes } from 'react'

export const Text = ({ description }) => (
  <div>
    {description ?
      description.split('\n').map((text, i) => (
        <p
          className={(i === 0) ? 'firstLine' : null}
          key={`descr${i}`}
        >
          {text}
        </p>
      )) : null
    }
  </div>
)

Text.propTypes = {
  description: PropTypes.string,
}