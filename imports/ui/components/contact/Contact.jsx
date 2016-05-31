/* eslint max-len: 0 */

import React, { Component } from 'react'
import { Text } from '../text/Text.jsx'


const description = 'Автор с пониманием и благодарностью примет конструктивные предложения и замечания. Хотя нужно помнить, что художника обидеть каждый может, а ласковое слово и ему приятно.'

export class Contact extends Component {
  componentDidMount() {
    document.title = `${Meteor.settings.public.title} - Контакты`
  }

  render() {
    return (
      <div>
        <div className='col-lg-6 h2'>
          <a href='mailto:info@rokhlinart.com'>info@rokhlinart.com</a>
        </div>
        <div className='col-lg-6'>
          <Text description={description} />
        </div>
      </div>
    )
  }
}
