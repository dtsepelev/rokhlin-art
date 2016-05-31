import React, { PropTypes } from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import classNames from 'classnames/bind'
import RetinaImage from 'react-retina-image'

import { styles } from './catalogitem.mss'


export const CatalogItem = ({ name, cover, slug, hidden }) => {
  // Hiding pictures, until they would be loaded
  const imgState = {}
  imgState[styles.hidden] = hidden
  imgState[styles.visible] = !hidden


  return (
    <div
      className={classNames(imgState, 'col-sm-6', styles.main, 'masonryItem')}
      onClick={() => { FlowRouter.go('gallery', { slug }) }}
    >
      <div className={styles.imgWrapper}>
        <RetinaImage
          src={cover}
          alt={name}
          className={styles.img}
        />
        <span>{name}</span>
      </div>
    </div>
  )
}

CatalogItem.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
}