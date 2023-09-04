import countries from '../config/countries';

export default {
  title: 'Contact Info',
  name: 'contactInfo',
  type: 'object',
  initialValue: {
    country: 'US'
  },
  fields: [
    {
      title: 'Street Adress 1',
      name: 'streetAdressOne',
      type: 'string',
    },
    {
      title: 'Street Adress 2',
      name: 'streetAdressTwo',
      type: 'string',
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
    },
    {
      title: 'Zip Code',
      name: 'zipCode',
      type: 'string',
    },
    {
      title: 'Country',
      name: 'country',
      type: 'reference',
      to: [{type: 'country'}],
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
    },
    {
      title: 'E-mail',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.custom(email => {
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
    {
      title: 'Website',
      name: 'website',
      type: 'string',
    },
  ],
}