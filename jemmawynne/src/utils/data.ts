export const propByPath = (path: string | string[], obj: object) => {
	const propPath = typeof path === 'string' ? path.split('.') : path
	const [firstKey, ...rest] = propPath
	return rest.length ? propByPath(rest, obj[firstKey]) : obj[firstKey]
}
