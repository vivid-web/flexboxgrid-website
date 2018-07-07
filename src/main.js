/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */

import './plugins/bem';
import './plugins/prism';
import './plugins/register-service-worker';
import './plugins/universal-analytics';

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 *
 * http://stylus-lang.com/
 */

import './assets/stylus/app.styl';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import App from './App.vue';

Vue.config.productionTip = false;

/* ============
 * Ready... Set... Go!
 * ============
 *
 * Last but not least, let's create a new
 * Vue instance and bind the instance
 * to the #app element.
 */
new Vue({
  /**
   * The name of the application.
   */
  name: 'FlexboxGridWebsite',

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
}).$mount('#app');
