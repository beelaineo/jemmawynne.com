import { useState } from 'react'

interface Options {
	min?: number
	max?: number
}

const defaultOptions = {
	min: -Infinity,
	max: Infinity,
}

export interface UseCounterValues {
	count: number
	increment: () => void
	decrement: () => void
	setCount: (c: number) => void
	isMin: boolean
	isMax: boolean
}

const minMax = (min: number, max: number) => (input: number): number => Math.min(Math.max(input, min), max)

export const useCounter = (initialCount: number = 0, options: Options): UseCounterValues => {
	const { min, max } = {
		...defaultOptions,
		...options,
	}
	const within = minMax(min, max)
	const [count, setCountState] = useState<number>(initialCount)

	const increment = () => setCountState(within(count + 1))
	const decrement = () => setCountState(within(count - 1))

	const setCount = (num) => setCountState(within(num))

	const isMin = count === min
	const isMax = count === max
	return { count, increment, decrement, setCount, isMin, isMax }
}
