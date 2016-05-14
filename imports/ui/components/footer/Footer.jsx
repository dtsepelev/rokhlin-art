import React from 'react'
import { styles } from './footer.mss'
import classNames from 'classnames'

const classes = {
  main: styles.main,
  wrapper: classNames(styles.wrapper, 'container'),
  love: 'hidden-xs',
  copyright: styles.copyright,
}

export const Footer = () => (
  <footer className={classes.main}>
    <div className={classes.wrapper}>
      <span className={classes.love}>Made with &lt;3 in Saint-Petersburg</span>
      <span className={classes.copyright}>Copyright © 2016 Alexander Rokhlin</span>
    </div>
  </footer>
)