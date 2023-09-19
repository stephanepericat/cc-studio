import { supportedLanguages } from "../config/languages"

export default {
  title: 'Localized block',
  name: 'localeBlock',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{type: 'block'}, {type: 'image'}],
    fieldset: lang.isDefault ? null : 'translations'
  }))
}