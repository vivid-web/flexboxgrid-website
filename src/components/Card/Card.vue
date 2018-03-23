<template>
  <div :class="classNames">
    <slot />
  </div>
</template>
<script>
import BlockMixin from '@/mixins/block';

export default {
  /**
   * The name of the component.
   */
  name: 'UICard',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'card',

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

  .card
    overflow: hidden
    padding: 1rem
    width: 100%

    +variant('light')
      background-color: $opacity_white_20
      border: 1px solid $opacity_black_20

    +variant('dark')
      background-color: $opacity_black_20
      border: 1px solid $opacity_white_20
</style>
