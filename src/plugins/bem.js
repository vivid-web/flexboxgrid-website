/* ============
 * BEM
 * ============
 *
 * BEM stands for Block, Element and Modifier.
 * This module is a wrapper around CSS classes using this standard.
 * Doing it this way, this module can be used throughout the whole application.
 */

import Vue from 'vue';
import BEM from '@/utilities/BEM';

const bem = new BEM();

// Bind BEM to Vue.
Vue.$css = bem;
Object.defineProperty(Vue.prototype, '$css', {
  get() {
    return bem;
  },
});
