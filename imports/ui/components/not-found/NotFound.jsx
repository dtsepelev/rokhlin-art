import React from 'react'
import { Text } from '../text/Text.jsx'

const classes = {
  main: 'col-xs-12',
}

export const NotFound = () => (
  <div className={classes.main}>
    <Text description='Старались изо всех сил, но похоже такая страница не существует :(' />
  </div>
)