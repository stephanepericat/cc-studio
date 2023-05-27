export default {
  name: 'product',
  type: 'document',
	title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'productCategory'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'visual',
      type: 'image',
      title: 'Visual',
    },
  ]
}