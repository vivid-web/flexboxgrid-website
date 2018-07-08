<script>
import ComponentMixin from '@/mixins/component';
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UIBlockContent',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'block',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'content',

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

  .block
    +has('content')
      font-weight: 300
      line-height: 1.5rem
      overflow: hidden
      word-wrap: break-word

      +variant('center')
        text-align : center

      +variant('dark')
        color: $primary_white

      +variant('dark-highlight')
        color: $primary_white

      +variant('light')
        color: $primary_black

      +variant('light-highlight')
        color: $primary_black
</style>
