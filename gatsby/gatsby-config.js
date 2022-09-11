module.exports = {
  siteMetadata: {
    title: `Louise Holcomb's Webpage`,
    siteUrl: `https://www.louiseholcomb.com`,
    description: `Website of Louise Holcomb`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'aphbxqqx',
        dataset: 'production',
        watchMode: true,
        // TODO: move token to different file
        token: "skO2GUy5ftIIjL2qnJDwgl69dH97AjHESyND9EpITeAzfjbGDc725ZIMBuxuNCY7uuSRMICEXSlE8qLNeEsWVhlOlgRPow3ZZ1KsC8GE2dOlgF2w2g7HsXlqF9h1AqL8u3jwG7sxx2aT5gHcQrqG5XJgpr92CPRSjW4fJSSdugVXihNeUwN3",
      }
    },
  ],
};
