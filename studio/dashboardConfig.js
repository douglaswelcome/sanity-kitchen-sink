export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6099cea90ddbfd166b9fe920',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h4cf44wb',
                  apiId: 'ca5cc419-be00-4bde-99fa-4248b1517a04'
                },
                {
                  buildHookId: '6099cea8af7ccd1315c3c643',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c9rz3332',
                  apiId: 'b1dbced0-ffa0-47fb-883d-5dae771af7bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/douglaswelcome/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c9rz3332.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
