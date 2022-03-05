import { NextApiRequest, NextApiResponse } from 'next'
import dotEnv from 'dotenv'
import fetch from 'isomorphic-unfetch'
import Sentry from '../../src/services/sentry'

dotEnv.config()

const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID
const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY

const SUBSCRIBE_ENDPOINT = `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/subscribe`

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.statusCode = 404
    res.end()
  }
  const { email } =
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  if (!email) {
    res.statusCode = 400
    res.send('You must provide an email address')
  }
  const args = {
    api_key: KLAVIYO_API_KEY,
    profiles: [{ email }],
  }

  const { statusCode, data } = await fetch(SUBSCRIBE_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(args),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(async (r) => {
    const data = await r.json()
    if (r.status !== 200) {
      Sentry.configureScope((scope) => {
        scope.setExtra('status', r.status)
        scope.setExtra('statusText', r.statusText)
        scope.setExtra('email', email)
      })
      Sentry.captureException('Error signing up for mailing list')
    }
    return {
      statusCode: r.status,
      data,
    }
  })

  res.statusCode = statusCode
  res.json({ statusCode, message: 'success' })
}
