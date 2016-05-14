import React, { PropTypes } from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import classNames from 'classnames'

import { styles } from './catalogitem.mss'

const classes = {
  main: classNames('col-sm-6', styles.main, 'masonryItem'),
  img: styles.img,
}

export const CatalogItem = ({ name, cover, slug }) => (
  <a className={classes.main} href={FlowRouter.path('gallery', { slug })}>
    <img src={cover} alt={name} className={classes.img} />
    <span>{name}</span>
  </a>
)

CatalogItem.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}