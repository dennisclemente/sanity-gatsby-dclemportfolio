export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e718faea4c8b8e2f5263e6c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-dclemportfolio-studio',
                  apiId: '5e8e1189-fe05-423f-abf7-74b10ef601e8'
                },
                {
                  buildHookId: '5e718faaa4c8b830b32639b8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-dclemportfolio',
                  apiId: 'a7fcfa1b-6540-4f92-8633-979b85857d4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennisclemente/sanity-gatsby-dclemportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-dclemportfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
