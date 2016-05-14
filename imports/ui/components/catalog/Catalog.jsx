import React, { PropTypes, Component } from 'react'
import { CatalogItem } from '../catalog-item/CatalogItem.jsx'
import Masonry from 'react-masonry-component'
import Loader from 'react-loader'
import { spinnerOptions } from '../spinner/spinner.jsx'
import imagesLoaded from 'imagesloaded'

const options = {
  itemSelector: '.masonryItem',
  columnWidth: '.col-sm-6',
  percentPosition: true,
  transitionDuration: 0,
}


export class Catalog extends Component {
  constructor(props) {
    super(props)

    this.state = { imagesLoaded: false }
  }

  componentDidMount() {
    imagesLoaded('#masonry', () => {
      Meteor.setTimeout(() => {
        this.setState({ imagesLoaded: true })
      }, 200)
    })
  }

  render() {
    return (
      <Loader
        loaded={this.state.imagesLoaded}
        options={spinnerOptions}
      >
        <Masonry
          id='masonry'
          options={options}
          disableImagesLoaded={false}
        >
          {this.props.galleries.map(gallery => (
            <CatalogItem
              name={gallery.name}
              cover={gallery.cover}
              key={gallery._id}
              slug={gallery.slug}
            />
            )
          )}
        </Masonry>
      </Loader>
    )
  }
}

Catalog.propTypes = {
  galleries: PropTypes.array.isRequired,
}