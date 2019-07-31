import { contentSectionFragment } from '../../graphql/fragments'
import { ContentSection } from '../../types'

export interface HomepageResponse {
	Homepage: {
		_id: string
		contentSections: ContentSection[]
	}
}

export const homepageQuery = /*  GraphQL */ `
query HomepageQuery {
  Homepage(id: "homepage") {
    _id
    contentSections {
      ...ContentSectionFragment
    }
  }
}
${contentSectionFragment}
`
