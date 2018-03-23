<template>
  <div :class="classNames">
    <slot/>
  </div>
</template>
<script>
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UICardTitle',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'title',

  /**
   * The mixins being injected into this component.
   */
  mixins: [
    ElementMixin,
  ],
};
</script>
<style lang="stylus">
  @import '~@/assets/stylus/_imports.styl'

  .card
    +has('title')
      font-size: 2rem
      font-weight: 600

      +variant('light')
        color: $primary_black

      +variant('dark')
        color: $primary_white
</style>
