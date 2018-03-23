import CSSUtil from '@/utils/css';
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
     * @returns {Array} The correct CSS class names.
     */
    classNames() {
      return CSSUtil
        .getBlockClassNames(this.$options.block, this.getVariants)
        .map(className => this.getClassName(className));
    },
  },
};
