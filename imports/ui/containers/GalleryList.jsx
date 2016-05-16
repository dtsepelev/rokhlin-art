import React from 'react'
import { composeWithTracker } from 'react-komposer'

import { Catalog } from '/imports/ui/components/catalog/Catalog.jsx'
import { Galleries } from '/imports/api/galleries/galleries.js'
import { Pictures } from '/imports/api/pictures/pictures.js'
import { Loader } from '/imports/ui/components/loader/Loader.jsx'

function composer(props, onData) {
  const handle = Meteor.subscribe('galleries')

  if (handle.ready()) {
    const galleries = Galleries.find({}).map((gallery) => {
      const newGallery = gallery
      const picture = Pictures.findOne({ _id: gallery.cover })
      newGallery.cover = picture.url
      return newGallery
    })
    onData(null, { galleries })
  }
}

const loading = () => (<div><Loader /></div>)

export default composeWithTracker(composer)(Catalog, loading)