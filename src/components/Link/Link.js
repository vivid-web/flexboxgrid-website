import Blockable from '@/mixins/Blockable';
import Slotable from '@/mixins/Slotable';

// Component styling
import '@/assets/stylus/components/_link.styl';

/* @vue/component */
export default {
  /**
   * The name of the component.
   */
  name: 'UILink',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'link',

  /**
   * The mixins injected into this component.
   */
  mixins: [
    Blockable,
    Slotable,
  ],

  /**
   * The properties that this component accepts.
   */
  props: {
    /**
     * If the link is an external link.
     */
    isExternal: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  /**
   * Renders the component.
   *
   * @param {Function} h Will create the DOM element.
   *
   * @returns {VNode} The virtual DOM tree.
   */
  /* eslint-disable-next-line no-unused-vars */
  render(h) {
    const props = {
      class: this.classes,
    };

    if (this.isExternal) {
      props.attrs = {
        target: '_blank',
        rel: 'noopener noreferrer',
      };
    }

    return (
      <a {...props}>
        {this.children}
      </a>
    );
  },
};
