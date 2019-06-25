import * as React from 'react'
import { useQuery } from 'urql'
import { homepageQuery, HomepageResponse } from './homepageQuery'
import { ContentSection } from '../../components/ContentSection'

export const Homepage = () => {
	const [response] = useQuery<HomepageResponse>({ query: homepageQuery })
	const { fetching, data, error } = response
	if (error)
		return (
			<React.Fragment>
				<p>error!</p>
				<pre>JSON.stringify(error, null, 2)</pre>
			</React.Fragment>
		)

	if (fetching || !data || !data.Homepage.contentSections) return null
	const { contentSections } = data.Homepage
	return (
		<React.Fragment>
			{contentSections.map((block) => (
				<ContentSection key={block._key} block={block} />
			))}
		</React.Fragment>
	)
}
