<template>
  <pre :class="classNames"><slot /></pre>
</template>
<script>
import BlockMixin from '@/mixins/block';

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
   * The mixins injected into this component.
   */
  mixins: [
    BlockMixin,
  ],
};
</script>
<style lang="stylus">
  @import '~@/assets/stylus/_imports.styl'

  .code
    font-family: 'Fira Code', monospace
    line-height: 1.5rem
    overflow: auto
    padding: 0.5rem
    white-space: pre
    word-wrap: normal

    +variant('light')
      background-color: opacity-black(0.05)
      border: 1px solid $opacity_black_20
      color: $primary_black

    +variant('dark')
      background-color: opacity-white(0.05)
      border: 1px solid $opacity_white_20
      color: $primary_white
</style>
