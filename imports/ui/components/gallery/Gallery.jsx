import React, { PropTypes, Component } from 'react'
import Masonry from 'react-masonry-component'
import classNames from 'classnames'
import imagesLoaded from 'imagesloaded'
import Loader from 'react-loader'
import { spinnerOptions } from '../spinner/spinner.jsx'

import { Picture } from '../picture/Picture.jsx'
import { Text } from '../text/Text.jsx'

import { styles } from './gallery.mss'

const classes = {
  name: classNames('col-xs-12', 'col-lg-6'),
  description: classNames('col-xs-12', 'col-lg-6'),
  meta: styles.meta,
  gridSize: classNames('masonryGridSize', 'col-sm-6'),
}

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

    this.state = { imagesLoaded: false }

    this.handleResize = this.handleResize.bind(this)
    this.masonryRef = this.masonryRef.bind(this)
  }

  componentDidMount() {
    imagesLoaded('#masonry', () => {
      Meteor.setTimeout(() => {
        this.setState({ imagesLoaded: true })
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
    return (
      <div>
        <div className={classes.meta}>
          <h2 className={classes.name}>{this.props.gallery.name}</h2>
          <div className={classes.description}>
            <Text description={this.props.gallery.description} />
          </div>
        </div>
        <Loader
          loaded={this.state.imagesLoaded}
          options={spinnerOptions}
        >
          <Masonry
            id='masonry'
            options={options}
            ref={this.masonryRef}
          >
            {this.props.pictures.map(picture => (
              <Picture
                name={picture.name}
                url={picture.url}
                key={picture._id}
                pictureId={picture._id}
                handleResize={this.handleResize}
              />
              )
            )}
            <div className={classes.gridSize} />
          </Masonry>
        </Loader>
      </div>
    )
  }
}


Gallery.propTypes = {
  gallery: PropTypes.object.isRequired,
  pictures: PropTypes.array.isRequired,
}
