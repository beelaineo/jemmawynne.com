import * as React from 'react'
import { Collection } from 'use-shopify'
import { useQuery } from 'urql'
import { SETTINGS_QUERY, SettingsResponse } from './settingsQuery'
import { unwindEdges } from '../../utils/graphql'

const { useContext } = React

interface SettingsContextValue {
	ready: boolean
	collections: Collection[]
}

const SettingsContext = React.createContext<SettingsContextValue | undefined>(undefined)

export const SettingsConsumer = SettingsContext.Consumer

export const useSettings = () => {
	const ctx = useContext(SettingsContext)
	if (!ctx) throw new Error('useSettingsContext must be used within a SettingsProvider')
	return ctx
}

interface Props {
	children: React.ReactNode
}

export const SettingsProvider = ({ children }: Props) => {
	const [response] = useQuery<SettingsResponse>({ query: SETTINGS_QUERY })

	const ready = response.data && !response.fetching
	const collections = ready ? unwindEdges<Collection>(response.data.collections)[0] : []

	const value = {
		ready,
		collections,
	}

	return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
