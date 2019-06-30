/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'

// ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

const render = (Component: React.ComponentType) => {
	ReactDOM.render(<Component />, document.getElementById('root') as HTMLElement)
}

render(App)

if ((module as any).hot) {
	;(module as any).hot.accept('./App.tsx', () => {
		// eslint-disable-next-line
		const NewApp = require('./App.tsx')
		render(NewApp.App)
	})
}
