import countries from '../config/countries';

export default {
  title: 'Contact Info',
  name: 'contactInfo',
  type: 'object',
  fieldsets: [
    {
      title: 'Address',
      name: 'address',
    },
    {
      title: 'Contact',
      name: 'contact',
    },
  ],
  initialValue: {
    country: 'US'
  },
  fields: [
    {
      title: 'Street Adress 1',
      name: 'streetAdressOne',
      type: 'string',
      fieldset: 'address'
    },
    {
      title: 'Street Adress 2',
      name: 'streetAdressTwo',
      type: 'string',
      fieldset: 'address'
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
      fieldset: 'address'
    },
    {
      title: 'Zip Code',
      name: 'zipCode',
      type: 'string',
      fieldset: 'address'
    },
    {
      title: 'Country',
      name: 'country',
      type: 'string',
      fieldset: 'address',
      options: {
        list: [...countries],
      },
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
      fieldset: 'contact'
    },
    {
      title: 'E-mail',
      name: 'email',
      type: 'string',
      fieldset: 'contact'
    },
    {
      title: 'Website',
      name: 'website',
      type: 'string',
      fieldset: 'contact'
    },
  ],
}