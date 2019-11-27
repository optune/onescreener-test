import { Random } from 'meteor/random'

import { Pages } from '/imports/db'

export const userId = Random.id()

export const loadData = () => {
  Pages.remove({})
  Pages.insert({
    content: {
      title: 'Test Page',
      text: 'Main content text',
      type: 'TEXT',
    },
    logo: {
      text: '',
    },
    userId,
  })
}
