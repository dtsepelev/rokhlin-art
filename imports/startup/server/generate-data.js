import { Meteor } from 'meteor/meteor'
import { Pictures } from '../../api/pictures/pictures.js'
import { Galleries } from '../../api/galleries/galleries.js'
import { data } from './data.js'

Meteor.startup(() => {
  console.log('Starting meteor')
  if (Galleries.find().count() === 0 && data) {
    console.log('Generating content')

    data.forEach(gallery => {
      const newGallery = {
        name: gallery.name,
        description: gallery.description,
        slug: gallery.path.replace('./', ''),
      }

      const galleryId = Galleries.insert(newGallery)
      const pictures = gallery.children

      let weight = 100

      pictures.forEach((picture, i) => {
        const newPicture = {
          name: picture.name,
          url: picture.path.replace('./', '/gallery/'),
          gallery: galleryId,
          weight,
        }
        const pictureId = Pictures.insert(newPicture)
        weight += 1

        if (i === 0) {
          Galleries.update(galleryId, { $set: { cover: pictureId } })
        }
      })
    })

    console.log('Content generated')
  }
})