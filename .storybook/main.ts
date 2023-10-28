import type { StorybookConfig } from '@storybook/nextjs';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve('./'),
      ]; // 絶対パスでimportできるようにする
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@public': path.resolve(__dirname, '../public'),
      };
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // 圧縮無効
          },
        },
      ],
    });

    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin(),
    );

    const fileLoaderRule = config.module?.rules?.find((rule) => {
      if (
        typeof rule === 'object' &&
        rule?.test &&
        rule.test instanceof RegExp
      ) {
        return rule.test.test('.svg');
      }
    });

    if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
      fileLoaderRule.exclude = /\.svg$/;
    }

    return config;
  },
};
export default config;
