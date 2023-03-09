const sidebars = {
  openApiSidebar: [
    {
      type: 'category',
      label: 'IdentityNow',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'api/getting-started',
        },
        {
          type: 'doc',
          id: 'api/authentication',
        },
        {
          type: 'doc',
          id: 'api/authorization',
        },
        {
          type: 'doc',
          id: 'api/standard-collection-parameters',
        },
        {
          type: 'doc',
          id: 'api/rate-limit',
        },
        {
          type: 'category',
          label: 'V3 APIs',
          link: {
            type: 'generated-index',
            title: 'V3 APIs',
            description:
              'Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
            slug: '/api/v3',
          },
          // @ts-ignore
          items: require('./api/v3/sidebar.js'),
        },
        {
          type: 'category',
          label: 'Beta APIs',
          link: {
            type: 'generated-index',
            title: 'Beta APIs',
            description:
              'Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
            slug: '/api/beta',
          },
          // @ts-ignore
          items: require('./api/beta/sidebar.js'),
        },
      ],
    },
  ],
  idnDocs: [
    {
      type: 'autogenerated',
      dirName: 'docs',
    },
  ],
  sdkSidebar: [
    {
      type: 'autogenerated',
      dirName: 'tools',
    },
  ],
};
module.exports = sidebars;
