<script>
import ElementMixin from '@/mixins/element';
import ComponentMixin from '@/mixins/component';

export default {
  /**
   * The name of the component.
   */
  name: 'UISectionBody',

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
    ComponentMixin,
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

  .section
    +has('body')
      padding: 2rem 0
</style>
