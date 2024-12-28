export default {
  name: 'about',
  type: 'document',
	title: 'About',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string'
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image'
    },
    {
      name: 'about',
      title: 'About (Primary)',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [],
          }
        }
      ]
    },
    {
      name: 'about2',
      title: 'About (Secondary)',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [],
          }
        }
      ]
    },
    {
      name: 'cv_list',
      title: 'CV List',
      type: 'array',
      of: [
        {
          type: 'cvSection'
        }
      ]
    },
    {
      name: 'cv_download',
      title: 'CV Download',
      type: 'file'
    }
  ]
}