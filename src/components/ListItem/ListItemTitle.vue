<script>
import ComponentMixin from '@/mixins/component';
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UIListItemTitle',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  block: 'list-item',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'title',

  /**
   * The mixins being injected into this component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
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

  .list-item
    +has('title')
      font-size: 1.5rem

      +variant('light')
        color: $primary_black

      +variant('dark')
        color: $primary_white
</style>
