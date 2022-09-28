require('dotenv/config');

const { resolve } = require('path');

const manifestOptions = {
  name: 'Stably Diffused',
  /* eslint-disable camelcase */
  short_name: 'SD',
  start_url: '/',
  background_color: '#4582ec',
  theme_color: '#4582ec',
  /* eslint-enable camelcase */
  display: 'minimal-ui',
  icon: 'src/images/gatsby-icon.png'
};

const gtagOptions = {
  trackingId: process.env.GA_TRACKING_ID,
  head: true,
  anonymize: true
};

module.exports = {
  siteMetadata: {
    title: 'Stably Diffused',
    author: 'ayan4m1',
    description: 'Stable Diffusion images.',
    siteUrl: 'https://stablydiffused.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: resolve(process.env.SD_IMAGE_DIR)
      }
    },
    {
      resolve: 'gatsby-source-pg',
      options: {
        connectionString: process.env.SD_PG_CONNECTION_STRING,
        schema: 'public',
        refetchInterval: 60
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: gtagOptions
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp'
  ]
};
