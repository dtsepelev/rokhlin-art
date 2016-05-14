/* eslint max-len: 0 */

import React from 'react'
import classNames from 'classnames'

const classes = {
  firstLine: 'firstLine',
  email: classNames('col-lg-6', 'h2'),
  text: classNames('col-lg-6'),
}

export const Contact = () => (
  <div>
    <div className={classes.email}>
      <a href='mailto:artist@rokhlinart.com'>artist@rokhlinart.com</a>
    </div>
    <div className={classes.text}>
      <p className={classes.firstLine}>Свои вопросы и комментарии касательно творчества, смело направляйте по адресу artist@rokhlinart.com. Автор с удовольствием поддержит диалог и разъяснит непонятные моменты.</p><p>В случае, если представленные работы заинтересовали вас настолько, что появилось желание познакомиться с ними в живую и, возможно, даже сделать своими, также воспользуйтесь указанным адресом, и мы обменяемся контактами.</p><p>Сотрудничество с художественными галереями приветствуется, представители могут отправить свои данные по почте.</p>
    </div>
  </div>
)