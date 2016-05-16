import React from 'react'
import { composeWithTracker } from 'react-komposer'

import { Gallery } from '/imports/ui/components/gallery/Gallery.jsx'
import { Pictures } from '/imports/api/pictures/pictures.js'
import { Galleries } from '/imports/api/galleries/galleries.js'
import { Loader } from '/imports/ui/components/loader/Loader.jsx'

function composer(props, onData) {
  const picturesHandle = Meteor.subscribe('pictures')
  const galleriesHandle = Meteor.subscribe('galleries')

  if (picturesHandle.ready() && galleriesHandle.ready()) {
    const gallery = Galleries.findOne({ slug: props.slug })
    const query = { gallery: gallery._id }
    const pictures = Pictures.find(query).fetch()
    onData(null, { pictures, gallery })
  }
}

const loading = () => (<div><Loader /></div>)

export default composeWithTracker(composer)(Gallery, loading)