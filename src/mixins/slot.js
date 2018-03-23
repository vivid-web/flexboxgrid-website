export default {
  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The content being displayed.
     */
    content: {
      type: [String, Number],
      required: false,
    },
  },

  /**
   * The methods that this mixin will inject.
   */
  methods: {
    /**
     * Method which will check if the specific component has a slot.
     *
     * @param {String} slotName The name of the slot.
     *
     * @returns {boolean} If the slot is available.
     */
    hasSlot(slotName = 'default') {
      return !!this.$slots[slotName];
    },
  },
};
