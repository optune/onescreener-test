import { Random } from 'meteor/random'

import { Pages } from '/imports/db'

const RELOAD = false

export const loadData = () => {
  const pages = Pages.find()
  let userId

  if (pages.count() === 0 || RELOAD) {
    Pages.remove({})
    userId = Random.id()
    Pages.insert({
      content: {
        title: 'Test Page',
        text: 'Main content text',
        type: 'TEXT',
      },
      logo: {
        image: {
          url:
            'http://res.cloudinary.com/optune-me/image/upload/v1565795543/onescreener-v2/prod/ashley-afterhour-1/rSDDmPGA-2_zvdzqp.png',
        },
        size: 'M',
        text: 'Logo Test',
        color: 'rgba(0,0,0,1)',
        font: 'Open Sans',
      },
      userId,
    })
  } else {
    const page = pages.fetch()[0]
    userId = page.userId
  }

  return userId
}
