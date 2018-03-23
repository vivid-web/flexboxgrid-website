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
  name: 'UIFooter',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'footer',

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

  .footer
    padding: 1rem 0

    +variant('light')
      background-color: $primary_white

    +variant('dark')
      background-color: $primary_black
</style>
