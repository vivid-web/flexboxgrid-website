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
  name: 'UICardListItemContent',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'list-item-content',

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
    +has('list-item-content')
      margin-top: 0.5rem
</style>
