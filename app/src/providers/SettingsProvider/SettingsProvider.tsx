import * as React from 'react'
import { Collection } from 'use-shopify'
import { useQuery } from 'urql'
import { SETTINGS_QUERY, SettingsResponse } from './settingsQuery'
import { unwindEdges } from '../../utils/graphql'
import { Menu } from '../../types/generated'

const { useContext } = React

interface SettingsContextValue {
	ready: boolean
	menu?: Menu
}

const SettingsContext = React.createContext<SettingsContextValue | undefined>(
	undefined,
)

export const SettingsConsumer = SettingsContext.Consumer

export const useSettings = () => {
	const ctx = useContext(SettingsContext)
	if (!ctx)
		throw new Error('useSettingsContext must be used within a SettingsProvider')
	return ctx
}

interface Props {
	children: React.ReactNode
}

export const SettingsProvider = ({ children }: Props) => {
	const [response] = useQuery<SettingsResponse>({ query: SETTINGS_QUERY })

	const ready = response.data && !response.fetching
	const menu = ready ? response.data.Menu : undefined

	console.log(response)
	const value = {
		ready,
		menu,
	}

	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	)
}
