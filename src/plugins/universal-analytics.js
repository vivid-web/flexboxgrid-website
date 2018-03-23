/* ============
 * Flexbox Grid
 * ============
 *
 * A simple flexbox CSS grid system.
 *
 * http://flexboxgrid.vivid-websolutions.nl
 */

import Vue from 'vue';
import ua from 'universal-analytics';

export const visitor = ua(process.env.VUE_APP_ANALYTICS_CODE);

Vue.$analytics = visitor;
Object.defineProperty(Vue.prototype, '$analytics', {
  get() {
    return visitor;
  },
});

export default {
  visitor,
};
