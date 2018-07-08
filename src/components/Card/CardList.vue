<script>
import ComponentMixin from '@/mixins/component';
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UICardList',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'card',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'list',

  /**
   * The mixins being injected into this component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
  ],
};
</script>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<style lang="stylus">
  @import '~@/assets/stylus/_imports.styl'

  .card
    +has('list')
      list-style: none
</style>
