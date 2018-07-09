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
  name: 'SectionNoGutter',

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
      theme: 'light',
      title: 'No Gutters',
      subtitle: 'The content can be displayed without the gutters',
      codeExamples: {
        html: codeExampleHtml,
        vue: codeExampleVue,
      },
      numberOfColumns: 3,
    };
  },

  /**
   * The methods that this section can use.
   */
  methods: {
    /**
     * Will compute the column variants.
     *
     * @param {int} numberOfColumns The number of columns.
     *
     * @returns {String[]} The column variants.
     */
    columnVariants(numberOfColumns) {
      const variants = ['no-gutters'];

      variants.push(`sm-${numberOfColumns + 2}`);

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
    <VGrid :variants="['container', 'no-gutters']">
      <VRow variant="no-gutters">
        <VCol
          v-for="(index) in numberOfColumns"
          :key="index"
          :variants="columnVariants(index)"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variants="[theme, 'center']">
              {{ index }}
            </UIBlockContent>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
