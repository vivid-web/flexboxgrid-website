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
  name: 'UISectionSubtitle',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'subtitle',

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

  .section
    +has('subtitle')
      display: block
      font-size: 1.5rem
      font-weight: 100
      text-align: center

      +variant('dark')
        color: $primary_white

      +variant('light')
        color: $primary_black
</style>
