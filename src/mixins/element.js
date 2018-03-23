import CSSUtil from '@/utils/css';
import StyleMixin from '@/mixins/style';

export default {
  /**
   * The name of the element.
   */
  element: 'element',

  /**
   * The mixins used by this mixin.
   */
  mixins: [
    StyleMixin,
  ],

  /**
   * The computed properties that the mixin injects.
   */
  computed: {
    /**
     * Will get the block from the parent.
     *
     * @returns {String} The correct block name.
     */
    block() {
      return this.$parent.block || this.$parent.$options.block;
    },

    /**
     * Will get the CSS module class names.
     *
     * @returns {Array} The CSS module class names.
     */
    classNames() {
      return CSSUtil
        .getElementClassNames(this.block, this.$options.element, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },
};
