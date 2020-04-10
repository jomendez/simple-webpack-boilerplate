const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./site.config');

// Define common loader constants
const sourceMap = config.env !== 'production';

// HTML loaders
const html = {
  test: /\.html/,
  loader: 'file-loader?name=[name].[ext]',
};

// Javascript loaders
const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['babel-loader']
};

// Style loaders
const styleLoader = {
  loader: 'style-loader'
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')(),
    ],
    sourceMap,
  },
};

const css = {
  test: /\.css$/,
  use: [
    config.env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
  ],
};

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    config.env === 'production' ? MiniCssExtractPlugin.loader : styleLoader,
    cssLoader,
    postcssLoader,
    {
      loader: 'sass-loader',
      options: {
        sourceMap,
      },
    },
  ],
};

// Image loaders
const imageLoaderProd = {
  loader: 'image-webpack-loader',
  options: {
    esModule: false,
    bypassOnDebug: true,
    gifsicle: {
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    mozjpeg: {
      progressive: true,
    },
  },
};

const imageLoader = {
  loader: 'file-loader',
  options: {
    esModule: false,
    name: 'img/[name].[hash].[ext]'
  }
}

const images = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  exclude: /fonts/,
  use: [
    //'file-loader?name=img/[name].[hash].[ext]',
    config.env === 'production' ? imageLoaderProd : imageLoader,
  ].filter(Boolean),
};

// Font loaders
const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  exclude: /images/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[hash].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
};

// Video loaders
const videos = {
  test: /\.(mp4|webm)$/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[hash].[ext]',
        outputPath: 'images/',
      },
    },
  ],
};

const pug = {
  test: /\.pug$/,
  loader: ['pug-loader']
};

module.exports = [
  html,
  pug,
  js,
  css,
  sass,
  images,
  fonts,
  videos,
];