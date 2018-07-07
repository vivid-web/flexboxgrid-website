/* ============
 * Universal Analytics
 * ============
 *
 * A node module for Google's Universal Analytics and Measurement Protocol
 *
 * https://github.com/peaksandpies/universal-analytics
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
