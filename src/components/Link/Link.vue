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
  name: 'UILink',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'link',

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

  .link
    transition(100ms)
    text-decoration: none
    &:hover
      transition(100ms)

    +variant('light')
      color: $primary_light
      &:hover
        color: $primary_black

    +variant('dark')
      color: $primary_dark
      &:hover
        color: $primary_white
</style>
