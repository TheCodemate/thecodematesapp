import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { Configuration } from 'webpack';

interface CustomConfiguration extends Configuration {
  devServer?: {
    hot?: boolean;
    port?: number;
  };
}

const isDevelopment = process.env.NODE_ENV !== 'production';

const plugins: webpack.WebpackPluginInstance[] = [
  new HTMLWebpackPlugin({
    template: './public/index.html'
  })
];

isDevelopment
  ? plugins.push(new ReactRefreshWebpackPlugin())
  : plugins.push(new MiniCssExtractPlugin());

const config: CustomConfiguration = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    hot: true,
    port: 3000
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,

        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/i, // .sass or .scss
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  }
};

export default config;
