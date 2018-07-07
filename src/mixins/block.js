import StyleMixin from '@/mixins/style';

export default {
  /**
   * The name of the block.
   */
  block: 'block',

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
     * Computed the correct class names.
     *
     * @returns {String[]} The correct CSS class names.
     */
    classNames() {
      return this.$css
        .getBlockClassNames(this.$options.block, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },
};
