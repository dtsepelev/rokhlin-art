/* eslint react/no-did-update-set-state:0 */

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import smoothScroll from 'smoothscroll'
import RetinaImage from 'react-retina-image'

import { styles } from './picture.mss'

const classes = {
  img: styles.img,
  caption: 'caption',
}


export class Picture extends Component {
  constructor(props) {
    super(props)

    this.state = { isZoomed: false, resizing: false }
    this.handleZoom = this.handleZoom.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Skip re-rendering if this.state.resizing
    // was changed to false
    return !(this.state.resizing && !nextState.resizing)
  }

  componentDidUpdate() {
    // Scroll to updated component, if the reason
    // of update was resizing
    if (this.state.resizing) {
      this.props.handleResize()
      const refs = this.refs.picture.refs
      smoothScroll(refs.img, 500)
      this.setState({ resizing: false })
    }
  }

  handleZoom() {
    this.setState({
      isZoomed: !this.state.isZoomed,
      resizing: true,
    })
  }

  render() {
    // Setting classes based on zoom state
    const classesMainState = {
      'col-sm-6': !this.state.isZoomed,
      'col-sm-12': this.state.isZoomed,
    }
    classesMainState[styles.main_zoomed] = this.state.isZoomed

    // Hiding pictures, until they would be loaded
    classesMainState[styles.hidden] = this.props.hidden
    classesMainState[styles.visible] = !this.props.hidden

    classes.main = classNames(styles.main,
                              classesMainState,
                              'masonryItem')

    return (
      <div className={classes.main} onClick={this.handleZoom}>
        <RetinaImage
          src={this.props.url}
          alt={this.props.name}
          checkIfRetinaImgExists={false}
          className={classes.img}
          ref='picture'
        />
        <span className={classes.caption}>{this.props.name}</span>
      </div>
    )
  }
}


Picture.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleResize: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
}
