// Meteor
import { Mongo } from 'meteor/mongo'

// Collection
export const Genres = new Mongo.Collection('Genres')

// Security Policy (no direct insert on client side)
Genres.allow({
  insert() {
    return false
  },
  update() {
    return false
  },
  remove() {
    return false
  },
})

Genres.deny({
  insert() {
    return true
  },
  update() {
    return true
  },
  remove() {
    return true
  },
})
