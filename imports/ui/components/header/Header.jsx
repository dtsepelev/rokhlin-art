import React from 'react'
import { styles } from './header.mss'
import classNames from 'classnames'

const classes = {
  main: 'container',
  menu: styles.menu,
  menuElement: styles.menuElement,
  logo: classNames(styles.logo, 'h1'),
}

export const Header = () => (
  <header className={classes.main}>
    <a href='/' className={classes.logo}>Alexander Rokhlin</a>
    <ul className={classes.menu}>
      <li className={classes.menuElement}><a href='/about'>О художнике</a></li>
      <li className={classes.menuElement}><a href='/contact'>Контакты</a></li>
    </ul>
  </header>
)