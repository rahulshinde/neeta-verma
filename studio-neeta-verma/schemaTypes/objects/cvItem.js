export default {
  name: 'cvItem',
  type: 'object',
	title: 'CV Item',
  // icon: BookIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{
        type: 'block',
        styles: [],
        lists: [],
        marks: {
          decorators: [
            { title: 'Emphasis', value: 'em' },
            { title: 'Code', value: 'code' },
          ],
        }
      }]
    }
  ]
}