<script>
import BlockMixin from '@/mixins/block';
import ComponentMixin from '@/mixins/component';

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

  .block
    align-items: stretch
    box-sizing: border-box
    display: flex
    flex-direction: column
    flex-grow: 1
    overflow: hidden
    padding: 1rem
    width: 100%

    &:after
      content: ''
      display: block
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
