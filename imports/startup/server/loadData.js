import { Random } from 'meteor/random'

import { Genres, Pages } from '/imports/db'

const RELOAD = false

const GENRES = ['Rock', 'Funk', 'Techno', "Drum'n'Base"]

export const loadData = () => {
  const pages = Pages.find()
  let userId
  let userReload

  /*
   * Create page if not exists or if forced reload
   */

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
        text: '',
      },
      userId,
    })
  } else {
    const page = pages.fetch()[0]
    userId = page.userId
  }

  /*
   * Load some common genres
   */

  if (userReload || Genres.find().count() === 0) {
    Genres.remove({})
    GENRES.forEach(genre => {
      Genres.insert({ name: genre })
    })
  }

  return userId
}
