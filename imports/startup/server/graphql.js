import { setup } from 'meteor/swydo:ddp-apollo'
import { Random } from 'meteor/meteor'

import { makeExecutableSchema } from 'graphql-tools'
import { getSchema } from 'graphql-load'

import '/imports/api/resolvers'

import { userId } from './loadData'

/*
 * Context
 */

const schema = makeExecutableSchema(getSchema())


const context = currentContext => ({
  ...currentContext,
  userId,
})

/*
 * Apollo GraphQL Server
 */

export const startGraphQLServer = () => {
  setup({
    schema,
    context,
  })
}
