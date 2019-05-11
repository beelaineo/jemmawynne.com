import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		layout: {
			z: { [key: string]: number }
			spacing: { [key: string]: string }
			columns: { [key: string]: string }
		}
		font: {
			size: { [key: string]: string }
			weight: { [key: string]: number }
			family: { [key: string]: string }
		}
		color: { [key: string]: string }
		mediaQueries: { [key: string]: string }
	}
}
