export default {
  name: 'productCategory',
  type: 'document',
	title: 'Product Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
  ]
}