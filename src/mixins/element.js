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
     * Will get the CSS module class names.
     *
     * @returns {String[]} The CSS module class names.
     */
    classNames() {
      return this.$css
        .getElementClassNames(this.$options.block, this.$options.element, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },
};
