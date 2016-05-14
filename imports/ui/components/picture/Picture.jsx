import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import smoothScroll from 'smoothscroll'

import { styles } from './picture.mss'

const classes = {
  img: styles.img,
  caption: 'caption',
}

/**
 * Renders gallery cover with a name
 * @param  {String} options.name Gallery name
 * @param  {String} options.url  Cover url
 * @return {Component}
 */


export class Picture extends Component {
  constructor(props) {
    super(props)

    this.state = { isZoomed: false }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate() {
    this.props.handleResize()
    smoothScroll(this.refs.picture, 500)
  }

  handleClick() {
    this.setState({ isZoomed: !this.state.isZoomed })
  }

  render() {
    const classesMainState = {
      'col-sm-6': !this.state.isZoomed,
      'col-sm-12': this.state.isZoomed,
    }
    classesMainState[styles.main_zoomed] = this.state.isZoomed

    classes.main = classNames(styles.main, 'masonryItem', classesMainState)

    return (
      <a className={classes.main} onClick={this.handleClick}>
        <img
          src={this.props.url}
          alt={this.props.name}
          className={classes.img}
          id={this.props.pictureId}
          ref='picture'
        />
        <span className={classes.caption}>{this.props.name}</span>
      </a>
    )
  }
}


Picture.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  handleResize: PropTypes.func.isRequired,
}