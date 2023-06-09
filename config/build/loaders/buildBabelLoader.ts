import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts|)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTSX: isTsx,
              allExtensions: isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isProd && isTsx && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
