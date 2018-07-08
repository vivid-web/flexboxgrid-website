<script>
import ComponentMixin from '@/mixins/component';
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UIJumbotronTitle',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'jumbotron',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'title',

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

  .jumbotron
    +has('title')
      font-size: 5rem
      font-weight: 700
      margin-bottom: 1rem
      text-align: center

      +variant('dark')
        color: $primary_white

      +variant('light')
        color: $primary_black
</style>
