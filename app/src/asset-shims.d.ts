// svg-shim.d.ts
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

interface Country {
  english: string
  spanish: string
  countryCode: string
  dialingCode: string
  phoneFormat: string
  flagEmoji: string
  flags: string
}

declare module 'countries.json' {
  const content: Country[]
  export default content
}
