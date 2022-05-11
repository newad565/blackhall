const path = require('path');
const tailwind = require('tailwindcss');

module.exports = {
  siteMetadata: {
    title: '배그핵 서든핵 옵치핵 롤헬퍼 최저가',
    separator: '|',
    baseTitle: ' 핵 마 켓 ',
    lang: 'en',
    twitterHandle: '@핵마켓',
    siteUrl: `localhost:8000`,
    image: '',
    themeColor: '#fff',
    keyword: '배그 핵, 서든 핵, 옵치 핵, 서든 핵마켓, 배그 핵마켓, 옵치 핵마켓,최저가 핵마켓, 게임핵마켓, 카카오샵, 너지몰, 핵마트, 핵모아, 핵블리,',
    description: '국내 시장 점유율 1위 정지없는 배그핵 서든핵 옵치핵 &모든 게임핵 최저가로 보장& 24시 연중무휴 고객센터 운영 전문상담원이 친절하게 구매상담 및 원격지원 !',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-brotli',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 72,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [tailwind, require('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        purgeCSSOptions: {
          safelist: {
            standard: [],
            deep: [],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname, ''),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
