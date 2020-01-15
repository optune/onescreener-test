/* eslint-env mocha */
import { assert } from 'chai'

import { Random } from 'meteor/random'
import { resetDatabase } from 'meteor/xolvio:cleaner'

// API
import { ContentType } from '/imports/api'

// Collections
import { Pages } from '/imports/db'

// Mutation
import { changeTemplate } from './changeTemplate'

const userId = Random.id()

let doc
let pageId
let pageBefore

describe(__filename, function() {
  before(function() {
    resetDatabase(null)
  })

  before(function() {
    doc = {
      templateId: Random.id(),
    }
    pageId = Pages.insert({
      content: {
        title: 'Test Title',
        text: 'Test Text',
        type: ContentType.TEXT,
      },
      logo: { text: 'Logo Text' },
      userId,
    })
    pageBefore = Pages.findOne(pageId)
  })

  it('change template', function() {
    assert.isTrue(changeTemplate(null, { input: doc }, { userId }))

    const page = Pages.findOne({ _id: pageId })

    assert.ok(page)

    assert.deepEqual(page.logo, pageBefore.logo)
    assert.deepEqual(page.content, pageBefore.content)
    assert.equal(page.templateId, doc.templateId)
    assert.equal(page.userId, userId)
  })
})
