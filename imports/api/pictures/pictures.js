import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Pictures = new Mongo.Collection('pictures')

Pictures.deny({
  insert() { return true },
  update() { return true },
  remove() { return true },
})

const PictureSchema = new SimpleSchema({
  name: {
    type: String,
  },
  url: {
    type: SimpleSchema.RegEx.Url,
  },
  gallery: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  weight: {
    type: Number,
    defaultValue: 100,
  },
})

Pictures.attachSchema(PictureSchema)

export { Pictures }