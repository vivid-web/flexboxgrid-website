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
  name: 'UISectionUnderline',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'underline',

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
    +has('underline')
      display: block
      height: 2px
      margin: 1.5rem auto
      width: 200px

      +variant('dark')
        background-color: $primary_dark

      +variant('light')
        background-color: $primary_light
</style>
