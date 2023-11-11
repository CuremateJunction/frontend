/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify';
import router from '../router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export function registerPlugins(app) {
  app.use(vuetify).use(router);
}
