/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure your project is capable of handling css files
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';

// Composables
import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints'; // following material design 3 spec

const lightTheme = {
  dark: false,
  colors: {
    'background': '#FFFFFF',
    'surface': '#FFFFFF',
    'primary': '#32D9C8',
    'primary-darken-1': '#0FBFBF',
    'secondary': '#F2D5C4',
    'secondary-darken-1': '#F2D5C4',
    'error': '#B00020',
    'info': '#0388A6',
    'success': '#4CAF50',
    'warning': '#FB8C00',
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
  blueprint: md3,
});
