import React, { PropTypes, Component } from 'react'
import Masonry from 'react-masonry-component'
import classNames from 'classnames'
import imagesLoaded from 'imagesloaded'
import { Meteor } from 'meteor/meteor'

import { Picture } from '../picture/Picture.jsx'
import { Text } from '../text/Text.jsx'
import { Loader } from '../loader/Loader.jsx'

import { styles } from './gallery.mss'


const options = {
  itemSelector: '.masonryItem',
  columnWidth: '.masonryGridSize',
  percentPosition: true,
  transitionDuration: 0,
  gridSize: 'col-sm-6',
}


export class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = { imagesLoaded: false, imagesToLoad: 10 }

    this.handleResize = this.handleResize.bind(this)
    this.masonryRef = this.masonryRef.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    document.title = `${Meteor.settings.public.title} - ${this.props.gallery.name}`

    window.addEventListener('scroll', this.handleScroll)

    imagesLoaded('#masonry', () => {
      Meteor.setTimeout(() => {
        this.setState({ imagesLoaded: true })
      }, 200)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  getScrollTop() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    }

    const scrollTop = (document.documentElement ||
                    document.body.parentNode ||
                    document.body).scrollTop

    return scrollTop
  }

  getDocumentHeight() {
    const body = document.body
    const html = document.documentElement

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
  }

  handleScroll() {
    if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight - 200)
      return

    // Break if there is nothing to load
    if (this.props.pictures.length < this.state.imagesToLoad + 1)
      return

    // Break if already loading
    if (!this.state.imagesLoaded)
      return

    // Load more images
    const imagesToLoad = this.state.imagesToLoad + 10

    this.setState({ imagesToLoad, imagesLoaded: false })
    imagesLoaded('#masonry', () => {
      Meteor.setTimeout(() => {
        this.setState({ imagesLoaded: true })
        this.handleResize()
      }, 200)
    })
  }

  handleResize() {
    this.masonry.layout()
  }

  masonryRef(c) {
    if (c !== null) this.masonry = c.masonry
  }

  render() {
    const picturesToShow = this.props
                               .pictures
                               .slice(0, this.state.imagesToLoad)

    const pictures = picturesToShow.map((picture, i) => {
      let loader

      // Add loader if we're appending new images
      if (i === this.state.imagesToLoad - 10 && !this.state.imagesLoaded) {
        loader = <Loader />
      }

      let hidden = false

      // Hide images on loading
      if (i >= this.state.imagesToLoad - 10 && !this.state.imagesLoaded) {
        hidden = true
      }

      return (
        <div key={picture._id}>
          {loader}
          <Picture
            name={picture.name}
            url={picture.url}
            handleResize={this.handleResize}
            className='masonryItem'
            hidden={hidden}
          />
        </div>
      )
    })


    return (
      <div>
        <div className={classNames(styles.meta, 'clearfix')}>
          <h2 className='col-xs-12 col-lg-6'>
            {this.props.gallery.name}
          </h2>
          <div className='col-xs-12 col-lg-6'>
            <Text description={this.props.gallery.description} />
          </div>
        </div>
        <Masonry
          id='masonry'
          options={options}
          ref={this.masonryRef}
          className={styles.masonry}
        >
          {pictures}
          <div className='col-sm-6 masonryGridSize' />
        </Masonry>
      </div>
    )
  }
}


Gallery.propTypes = {
  gallery: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
}
