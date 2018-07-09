<script>
import BlockMixin from '@/mixins/block';
import ComponentMixin from '@/mixins/component';

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
    ComponentMixin,
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
    height: 100%
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
