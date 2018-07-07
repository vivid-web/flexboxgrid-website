<script>
import BlockMixin from '@/mixins/block';
import ComponentMixin from '@/mixins/component';

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

  .footer
    padding: 1rem 0

    +variant('light')
      background-color: $primary_white

    +variant('dark')
      background-color: $primary_black
</style>
