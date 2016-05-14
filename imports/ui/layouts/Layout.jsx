import React, { PropTypes } from 'react'
import styles from './layout.mss'
import classNames from 'classnames'

const classes = {
  content: classNames('container', styles.content),
  wrapper: 'row',
}

export const Layout = ({ header, content, footer }) => (
  <div>
    {header}
    <main className={classes.content}>
      <div className={classes.wrapper}>
        {content}
      </div>
    </main>
    {footer}
  </div>
)

Layout.propTypes = {
  header: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired,
}