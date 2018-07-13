import Blockable from '@/mixins/Blockable';
import Slotable from '@/mixins/Slotable';
import Prism from 'vue-prism-component';

// Component styling
import '@/assets/stylus/components/_code.styl';

/* @vue/component */
export default {
  /**
   * The name of the component.
   */
  name: 'UICode',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'code',

  /**
   * The components that this component can use.
   */
  components: {
    Prism,
  },

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
     * The content that will be rendered in this component.
     */
    content: {
      required: true,
      type: String,
    },

    /**
     * The programming language of the file.
     */
    language: {
      required: false,
      type: String,
      default: 'html',
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
    return (
      <div class={this.classes}>
        <Prism
          language={this.language}
          code={this.content}
        />
      </div>
    );
  },
};
