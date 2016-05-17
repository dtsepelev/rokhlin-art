/* eslint max-len: 0 */

import React from 'react'
import classNames from 'classnames'
import { Text } from '../text/Text.jsx'

const classes = {
  firstLine: 'firstLine',
  email: classNames('col-lg-6', 'h2'),
  text: classNames('col-lg-6'),
}

const description = 'Автор с пониманием и благодарностью примет конструктивные предложения и замечания. Хотя нужно помнить, что художника обидеть каждый может, а ласковое слово и ему приятно.'

export const Contact = () => (
  <div>
    <div className={classes.email}>
      <a href='mailto:artist@rokhlinart.com'>artist@rokhlinart.com</a>
    </div>
    <div className={classes.text}>
      <Text description={description} />
    </div>
  </div>
)