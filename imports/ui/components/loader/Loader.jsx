import React from 'react'
import { styles } from './loader.mss'
import classNames from 'classnames'

const classes = {
  main: classNames('col-xs-12', styles.main, 'masonryItem'),
}

export const Loader = () => (
  <div className={classes.main}>
    Загружаем
  </div>
)