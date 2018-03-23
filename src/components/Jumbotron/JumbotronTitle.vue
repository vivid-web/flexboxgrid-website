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
  name: 'UIJumbotronTitle',

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

  .jumbotron
    +has('title')
      font-size: 5rem
      font-weight: 700
      margin-bottom: 1rem
      text-align: center

      +variant('dark')
        color: $primary_white

      +variant('light')
        color: $primary_black
</style>
