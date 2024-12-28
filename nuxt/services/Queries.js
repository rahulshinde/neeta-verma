export const About = `{
	'about': *[_type == 'about'][0]{
		...,
    'profileImage': profileImage.asset->url,
    'cv_download': cv_download.asset->url,
    'cv_list': cv_list[]{
      ...,
      'items': items[]{
        ...,
        'description': description[]{
          ...,
        }
      }
    }
  }
}`