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
  name: 'UIJumbotronBody',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'body',

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
    +has('body')
      padding: 2rem 0
</style>
