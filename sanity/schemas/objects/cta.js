import { GiClick } from 'react-icons/gi'

export const cta = {
  name: 'cta',
  title: 'CTA Button',
  type: 'object',
  icon: GiClick,
  fieldsets: [
    {
      name: 'internalLink',
      title: 'Internal Link',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'mailToLink',
      title: 'Email link',
      description:
        "Use these fields to make the button open a new email in the user's email client. This will only work if the,",
      option: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'label',
      type: 'string',
      label: 'Label',
    },
    {
      name: 'link',
      type: 'internalLink',
    },
    {
      name: 'mailToEmail',
      type: 'email',
      fieldset: 'mailToLink',
      title: 'To: email address',
      validation: (Rule) =>
        Rule.custom((mailToEmail, ctx) => {
          if (mailToEmail.length && ctx.parent?.link?.document) {
            return 'You must remove the linked document for this CTA to enable an email link'
          }
          return true
        }).optional(),
    },
    {
      name: 'mailToSubject',
      type: 'string',
      fieldset: 'mailToLink',
      title: 'Email Subject',
      validation: (Rule) =>
        Rule.custom((mailToSubject, ctx) => {
          if (mailToSubject.length && ctx.parent?.link?.document) {
            return 'You must remove the linked document for this CTA to enable an email link'
          }
          return true
        }).optional(),
    },
  ],
}
