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
  name: 'UICardListItem',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'list-item',

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
    +has('list-item')
      list-style: none
      padding: 1rem
</style>
