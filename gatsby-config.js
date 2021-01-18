const pkg = require('./package.json')

module.exports = {
  siteMetadata: {
    title: pkg.name,
    description: pkg.description,
    author: pkg.author,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@assets': './assets',
          '@atoms': './components/atoms',
          '@molecules': './components/molecules',
          '@organisms': './components/organisms',
          '@utils': './utils',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MNyou.org',
        short_name: 'MNyou',
        start_url: '/',
        background_color: '#f7faf0',
        theme_color: '#f7faf0',
        icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: `${__dirname}/src/assets`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-2TZ38N61BJ',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ]
}
