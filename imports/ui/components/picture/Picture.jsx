/* eslint react/no-did-update-set-state:0 */

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import smoothScroll from 'smoothscroll'
import RetinaImage from 'react-retina-image'
import shallowCompare from 'react-addons-shallow-compare'

import { styles } from './picture.mss'


export class Picture extends Component {
  constructor(props) {
    super(props)

    this.state = { isZoomed: false, resizing: false }
    this.handleZoom = this.handleZoom.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Skips re-rendering if props/states propreties
     * did not changed or this.state.resizing
     * changing to false
     */
    return shallowCompare(this, nextProps, nextState) &&
      !(this.state.resizing && !nextState.resizing)
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

    return (
      <div
        className={classNames(styles.main,
                              classesMainState,
                              'masonryItem')}
        onClick={this.handleZoom}
      >
        <RetinaImage
          src={this.props.url}
          alt={this.props.name}
          checkIfRetinaImgExists={false}
          className={styles.img}
          ref='picture'
        />
        <span className='caption'>{this.props.name}</span>
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
