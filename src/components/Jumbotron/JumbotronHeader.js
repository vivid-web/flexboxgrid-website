import Elementable from '@/mixins/Elementable';
import Slotable from '@/mixins/Slotable';

// Component styling
import '@/assets/stylus/components/jumbotron/_header.styl';

/* @vue/component */
export default {
  /**
   * The name of the component.
   */
  name: 'UIJumbotronHeader',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'jumbotron',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'header',

  /**
   * The mixins being injected into this component.
   */
  mixins: [
    Elementable,
    Slotable,
  ],

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
        {this.children}
      </div>
    );
  },
};
