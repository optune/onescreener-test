import { getPage } from './utils/getPage'
import { updatePage } from './utils/updatePage'

const INCLUDED_FIELDS = {
  templateId: 1,
}

export const changeTemplate = function(root, { input }, { userId }) {
  /*
   * Get page & input
   */

  const { page } = getPage({ userId })
  const { templateId } = input

  /*
   * Set values
   */

  const values = {
    templateId,
  }

  /*
   * Update page
   */

  updatePage({ page, userId, values })

  return true
}
