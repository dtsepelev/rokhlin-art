import React from 'react'
import classNames from 'classnames'

import { styles } from './footer.mss'


export const Footer = () => (
  <footer className={styles.main}>
    <div className={classNames(styles.wrapper, 'container')}>
      <span className='hidden-xs'>
        Made with <span className={styles.loveIcon} /> by <a href='http://www.dmitrytsepelev.com'>Dmitry Tsepelev</a>
      </span>
      <span className={styles.copyright}>
        Copyright © 2016 Alexander Rokhlin
      </span>
    </div>
  </footer>
)