<script>
import ComponentMixin from '@/mixins/component';
import ElementMixin from '@/mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'UIListItemContent',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  block: 'list-item',

  /**
   * The name of the element.
   * Used for the BEM styling.
   */
  element: 'content',

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
    +has('content')
      margin-top: 0.5rem
</style>
