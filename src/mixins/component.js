import SlotMixin from './slot';

export default {
  /**
   * The properties that this mixin will add.
   */
  props: {
    /**
     * The content that will be rendered inside the component.
     */
    content: {
      type: [String, Number],
      required: false,
      default: null,
    },
  },

  /**
   * The mixins used by this mixin.
   */
  mixins: [
    SlotMixin,
  ],
};
