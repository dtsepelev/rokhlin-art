import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Galleries = new Mongo.Collection('galleries')

Galleries.deny({
  insert() { return true },
  update() { return true },
  remove() { return true },
})

const GalleriesSchema = new SimpleSchema({
  name: {
    type: String,
  },
  cover: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
  },
  description: {
    type: String,
    optional: true,
  },
  weight: {
    type: Number,
    defaultValue: 100,
  },
  slug: {
    type: String,
  },
})

Galleries.attachSchema(GalleriesSchema)

export { Galleries }