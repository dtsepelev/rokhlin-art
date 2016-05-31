import React, { PropTypes } from 'react'
import styles from './layout.mss'
import classNames from 'classnames'


export const Layout = ({ header, content, footer }) => (
  <div>
    {header}
    <main className={classNames('container', styles.content)}>
      <div className='row'>
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