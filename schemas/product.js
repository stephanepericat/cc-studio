export default {
  name: 'product',
  type: 'document',
	title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'productCategory'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: Rule => Rule.required().max(256),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required(),
    },
    {
      name: 'visual',
      type: 'image',
      title: 'Visual',
    },
  ]
}