/* eslint-env mocha */

// Tests that collections exists

import { assert } from 'chai'

import { Random } from 'meteor/random'

import { Pages, Templates } from './index'

const userId = Random.id()

describe(__filename, function() {
  it('Pages', function() {
    assert.isFunction(Pages.find)

    const id = Pages.insert({ title: 'Page Title', text: 'Test Text', userId })
    assert.ok(id)
  })
  it('Templates', function() {
    assert.isFunction(Templates.find)

    const id = Templates.insert({ title: 'Page Title', text: 'Test Text' })
    assert.ok(id)
  })
})
