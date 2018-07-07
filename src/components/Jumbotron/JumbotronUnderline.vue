<script>
import ComponentMixin from '@/mixins/component';
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

  .jumbotron
    +has('underline')
      height: 2px
      display: block
      margin: 2.5rem auto
      width: 200px

      +variant('dark')
        background-color: $primary_dark

      +variant('light')
        background-color: $primary_light
</style>
