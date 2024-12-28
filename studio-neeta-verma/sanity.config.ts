import {defineConfig} from 'sanity'
import { deskTool } from "sanity/desk"
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonTypes = new Set(["about"])

export default defineConfig({
  name: 'default',
  title: 'Neeta Verma',

  projectId: 'n1y1jiwk',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => 
        S.list()
          .title('Admin Panel')
          .items([
            S.listItem()
              .title('About')
              .id('about')
              .child(
                S.document()
                  .schemaType('about')
                  .documentId('about')
                ),
          ])
      }),
    structureTool(), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
})
