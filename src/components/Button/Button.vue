<template>
  <a :class="classNames">
    <slot />
  </a>
</template>
<script>
import BlockMixin from '@/mixins/block';

export default {
  /**
   * The name of the component.
   */
  name: 'UIButton',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'button',

  /**
   * The mixins injected into this component.
   */
  mixins: [
    BlockMixin,
  ],
};
</script>
<style lang="stylus">
  @import '~@/assets/stylus/_imports.styl'

  .button
    transition(100ms)
    display: block
    font-size: 1.5rem
    padding: 1rem 1rem
    text-align: center
    &:hover
      transition(100ms)

    +variant('primary')
      background-color: $primary
      color: $primary_white
      border: 1px solid $opacity_black_20
      text-decoration : none

      &:hover
        background-color: $primary_white
        border-color: $primary
        color: $primary

    +variant('block')
      width: 100%;
</style>
