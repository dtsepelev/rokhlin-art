/* eslint prefer-arrow-callback: 0 */

import { Meteor } from 'meteor/meteor'

import { Galleries } from '../galleries.js'
import { Pictures } from '../../pictures/pictures.js'

Meteor.publishComposite('galleries', function publishGalleries() {
  return {
    find() {
      return Galleries.find({})
    },

    children: [{
      find(gallery) {
        return Pictures.find({ _id: gallery.cover })
      },
    }],
  }
})