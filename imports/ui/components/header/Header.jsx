import React from 'react'
import { styles } from './header.mss'
import classNames from 'classnames'


export const Header = () => (
  <header className={classNames('container', styles.main)}>
    <a
      href='/'
      className={classNames(styles.logo, 'h1')}
    >
      Александр Рохлин
    </a>
    <ul className={styles.menu}>
      <li className={styles.menuElement}><a href='/about'>О художнике</a></li>
      <li className={styles.menuElement}><a href='/contact'>Контакты</a></li>
    </ul>
  </header>
)