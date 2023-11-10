/*
 * Copyright (c) 2023 The Pufferfish Team
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { defineConfig } = require('@vue/cli-service');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new VuetifyPlugin({
        // styles: {
        //   configFile: 'src/plugins/vuetify/vuetify.scss',
        // },
      }),
    ],
  },
});

