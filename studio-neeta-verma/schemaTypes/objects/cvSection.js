export default {
  name: 'cvSection',
  type: 'object',
	title: 'CV Section',
  // icon: BookIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'cvItem'
        }
      ]
    }
  ]
}