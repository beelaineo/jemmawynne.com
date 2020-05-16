interface EmailToProps {
  to: string
  subject: string
  body: string
}
export const buildMailTo = ({ to, subject, body }: EmailToProps): string =>
  [
    `mailto:${to}?`,
    'subject=',
    encodeURIComponent(subject),
    '&body=',
    encodeURIComponent(body),
  ].join('')
