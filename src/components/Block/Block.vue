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
  name: 'UIBlock',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'block',

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

  .block
    box-sizing: border-box
    overflow: hidden
    padding: 1rem
    width: 100%

    &:after
      display: block
      content: ''
      height: 0
      visibility: hidden

    +variant('dark')
      background-color: $opacity_white_20

    +variant('dark-highlight')
      background-color: $primary_dark

    +variant('light')
      background-color: $opacity_black_20

    +variant('light-highlight')
      background-color: $primary_light
</style>
