import { Meteor } from 'meteor/meteor'

import { startGraphQLServer } from '/imports/startup/server/graphql'
import { loadData } from '/imports/startup/server/loadData'

import pkg from '../package.json'

Meteor.startup(() => {
  console.log(`Starting ${pkg.name} ...`)

  // Code to run on server startup.
  startGraphQLServer()
  console.log('✅ GraphQL server initialized')

  // Load data
  loadData()
  console.log('✅ Data loaded')
})
