<script>
import BlockMixin from '@/mixins/block';
import ComponentMixin from '@/mixins/component';

export default {
  /**
   * The name of the component.
   */
  name: 'UIJumbotron',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'jumbotron',

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

  .jumbotron
    padding: 4rem 0

    +variant('dark')
      background-color: $primary_black

    +variant('light')
      background-color: $primary_white
</style>
