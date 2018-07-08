<script>
import ComponentMixin from '@/mixins/component';
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UICardHeader',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'card',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'header',

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
    +has('header')
      padding: 1rem

      +variant('light')
        border-bottom: 1px solid $primary_light

      +variant('dark')
        border-bottom: 1px solid $primary_dark
</style>
