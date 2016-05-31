import React from 'react'
import { styles } from './loader.mss'
import classNames from 'classnames'


export const Loader = () => (
  <div className={classNames('col-xs-12', styles.main, 'masonryItem')}>
    Загружаем
  </div>
)