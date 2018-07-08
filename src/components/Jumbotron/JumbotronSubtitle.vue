<script>
import ComponentMixin from '@/mixins/component';
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UIJumbotronSubtitle',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'jumbotron',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'subtitle',

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
    +has('subtitle')
      display: block
      font-size: 2.5rem
      font-weight: 100
      text-align: center

      +variant('dark')
        color: $primary_white

      +variant('light')
        color: $primary_black
</style>
