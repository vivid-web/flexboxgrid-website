export default {
  /**
   * The properties that this mixin will add.
   */
  props: {
    /**
     * The array of variants.
     */
    variants: {
      type: Array,
      default() {
        return [];
      },
      required: false,
    },

    /**
     * The variant for the styling.
     */
    variant: {
      type: String,
      default: null,
      required: false,
    },
  },

  /**
   * The computed properties that the mixin injects.
   */
  computed: {
    /**
     * Add all variants into the same array and return them.
     *
     * @returns {String[]} The variants.
     */
    getVariants() {
      // To make sure that we're not editing the property,
      // we create a copy of the array.
      const variants = this.variants.slice(0);

      if (this.variant) {
        variants.push(this.variant);
      }

      return variants;
    },
  },

  /**
   * The methods that this mixin can use.
   */
  methods: {
    /**
     * Getter for the name of the CSS class.
     * If a module is used, the hashed CSS class is returned.
     *
     * @param {String} className
     *
     * @returns {String} The corrected CSS class.
     */
    getClassName(className) {
      if (this.$style) {
        return this.$style[className];
      }

      return className;
    },
  },
};
