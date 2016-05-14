import { Meteor } from 'meteor/meteor'

import { Pictures } from '../pictures.js'

Meteor.publish('pictures', () => Pictures.find({}))