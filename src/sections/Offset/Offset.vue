<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExampleHtml from './code-example.html';
import codeExampleVue from './code-example.vue';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionOffset',

  /**
   * The components that this section can use.
   */
  components: {
    ...FlexboxgridVue,
    SectionLayout,
    UIBlock,
    UIBlockContent,
  },

  /**
   * The data that this section can use.
   *
   * @returns {Object} The view-model.
   */
  data() {
    return {
      theme: 'dark',
      title: 'Offset',
      subtitle: 'It is possible to add offset to the columns',
      codeExamples: {
        html: codeExampleHtml,
        vue: codeExampleVue,
      },
      numberOfRows: 11,
    };
  },

  /**
   * The methods that this section can use.
   */
  methods: {
    /**
     * Will compute the column class names.
     *
     * @param {int} columns The number of columns.
     * @param {int} offset  The amount of offset.
     *
     * @returns {Array} The array of class names.
     */
    columnVariants(columns, offset) {
      const variants = [];

      variants.push(`sm-${columns}`);
      variants.push(`sm-offset-${offset}`);

      return variants;
    },
  },
};
</script>

<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-examples="codeExamples"
  >
    <VGrid variant="container">
      <VRow
        v-for="(index) in numberOfRows"
        :key="index"
      >
        <VCol :variants="columnVariants(index, 12 - index)">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme" />
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
