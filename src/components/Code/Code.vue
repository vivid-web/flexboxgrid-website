<script>
import BlockMixin from '@/mixins/block';
import ComponentMixin from '@/mixins/component';
import Prism from 'vue-prism-component';

export default {
  /**
   * The name of the component.
   */
  name: 'UICode',

  /**
   * The name of the block.
   * Used for the BEM styling.
   */
  block: 'code',

  /**
   * The components that this component can use.
   */
  components: {
    Prism,
  },

  /**
   * The mixins injected into this component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
  ],


  /**
   * The properties that this component accepts.
   */
  props: {
    /**
     * The content that will be rendered in this component.
     */
    content: {
      required: true,
      type: String,
    },

    /**
     * The programming language of the file.
     */
    language: {
      required: false,
      type: String,
      default: 'html',
    },
  },
};
</script>

<template>
  <div :class="classNames">
    <Prism
      :language="language"
      :code="content"
    />
  </div>
</template>

<style lang="stylus">
@import '~@/assets/stylus/_imports.styl'

.code
  display: block
  line-height: 1.5rem
  margin-top: 1rem
  overflow: auto
  white-space: pre
  word-wrap: normal

  .token
    font-family: 'Fira Code', monospace
</style>
