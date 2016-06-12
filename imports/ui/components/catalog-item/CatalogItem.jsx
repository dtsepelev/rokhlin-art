import React, { Component, PropTypes } from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import classNames from 'classnames/bind'
import RetinaImage from 'react-retina-image'
import shallowCompare from 'react-addons-shallow-compare'

import { styles } from './catalogitem.mss'


export class CatalogItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const imgState = {}
    imgState[styles.hidden] = this.props.hidden
    imgState[styles.visible] = !this.props.hidden

    return (
      <div
        className={classNames(imgState, 'col-sm-6', styles.main, 'masonryItem')}
        onClick={() => { FlowRouter.go('gallery', { slug: this.props.slug }) }}
      >
        <div className={styles.imgWrapper}>
          <RetinaImage
            src={this.props.cover}
            alt={this.props.name}
            className={styles.img}
          />
          <span>{this.props.name}</span>
        </div>
      </div>
    )
  }
}


CatalogItem.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
}