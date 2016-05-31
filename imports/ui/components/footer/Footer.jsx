import React from 'react'
import { styles } from './footer.mss'
import classNames from 'classnames'


export const Footer = () => (
  <footer className={styles.main}>
    <div className={classNames(styles.wrapper, 'container')}>
      <span className='hidden-xs'>
        Made with <span className={styles.loveIcon} /> in Saint-Petersburg
      </span>
      <span className={styles.copyright}>
        Copyright © 2016 Alexander Rokhlin
      </span>
    </div>
  </footer>
)