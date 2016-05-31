import React, { PropTypes, Component } from 'react'
import Masonry from 'react-masonry-component'
import imagesLoaded from 'imagesloaded'

import { styles } from './Catalog.mss'

import { CatalogItem } from '../catalog-item/CatalogItem.jsx'
import { Loader } from '../loader/Loader.jsx'


const masonryOptions = {
  itemSelector: '.masonryItem',
  columnWidth: '.col-sm-6',
  percentPosition: true,
  transitionDuration: 0,
}


export class Catalog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imagesLoaded: false,
      galleriesToLoad: 10,
    }

    this.masonryRef = this.masonryRef.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    document.title = Meteor.settings.public.title

    window.addEventListener('scroll', this.handleScroll)

    imagesLoaded('#masonry', () => {
      Meteor.setTimeout(() => {
        this.setState({ imagesLoaded: true })
      }, 100)
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
    if (this.props.galleries.length < this.state.galleriesToLoad + 1)
      return

    // Break if already loading
    if (!this.state.imagesLoaded)
      return

    // Load more galleries
    const galleriesToLoad = this.state.galleriesToLoad + 10

    this.setState({ galleriesToLoad, imagesLoaded: false })
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
    const galleriesToShow = this.props
                               .galleries
                               .slice(0, this.state.galleriesToLoad)

    const galleries = galleriesToShow.map((gallery, i) => {
      let loader

      // Add loader if we're appending new galleries
      if (i === this.state.galleriesToLoad - 10 && !this.state.imagesLoaded) {
        loader = <Loader />
      }

      let hidden = false

      // Hide galleries on loading
      if (i >= this.state.galleriesToLoad - 10 && !this.state.imagesLoaded) {
        hidden = true
      }

      return (
        <div key={gallery._id}>
          {loader}
          <CatalogItem
            name={gallery.name}
            cover={gallery.cover}
            slug={gallery.slug}
            hidden={hidden}
          />
        </div>
      )
    })

    return (
      <div>
        <Masonry
          id='masonry'
          options={masonryOptions}
          className={styles.masonry}
          ref={this.masonryRef}
        >
          {galleries}
        </Masonry>
      </div>
    )
  }
}

Catalog.propTypes = {
  galleries: PropTypes.array.isRequired,
}