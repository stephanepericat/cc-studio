export default {
  title: 'Author',
  name: 'feedAuthor',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'E-mail',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required().custom(email => {
        if (typeof email === 'undefined') {
          return true // Allow undefined values
        }
        
        return email.toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )

          ? true
          : 'This is not an email'
      })
    },
  ],
}