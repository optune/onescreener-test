// Meteor
import { Mongo } from 'meteor/mongo'

// Collection
export const Templates = new Mongo.Collection('Templates')

// Security Policy (no direct insert on client side)
Templates.allow({
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

Templates.deny({
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
