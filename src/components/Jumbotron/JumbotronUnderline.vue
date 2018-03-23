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
  name: 'UIJumbotronUnderline',

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

  .jumbotron
    +has('underline')
      width: 200px
      height: 2px
      display: block
      margin: 2.5rem auto

      +variant('dark')
        background-color: $primary_dark

      +variant('light')
        background-color: $primary_light
</style>
