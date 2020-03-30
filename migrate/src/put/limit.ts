let start
let count = 0

export const increment = (shouldReport = false) => {
  if (!start) start = new Date()
  count = count + 1
  if (shouldReport) report()
}

const report = () => {
  // @ts-ignore
  const elapsed = (new Date() - start) / 1000
  const rate = Math.round((count / elapsed) * 100) / 100
  console.log(`   Rate: ${rate}/s`)
}
