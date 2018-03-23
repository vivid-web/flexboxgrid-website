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
  name: 'UISection',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'section',

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

  .section
    padding: 2rem 0

    +variant('dark')
      background-color: $primary_black

    +variant('light')
      background-color: $primary_white
</style>
