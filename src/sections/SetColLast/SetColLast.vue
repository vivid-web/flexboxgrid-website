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
  name: 'SectionSetColLast',

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
      title: 'Send Column to End',
      subtitle: 'It is possible to send a column to the end',
      codeExamples: {
        html: codeExampleHtml,
        vue: codeExampleVue,
      },
      numberOfColumns: 6,
    };
  },

  /**
   * The methods that this section can use.
   */
  methods: {
    /**
     * Will compute the column variants.
     *
     * @param {Number} index The current index.
     *
     * @returns {String[]} The array of variants.
     */
    columnVariants(index) {
      const classNames = ['sm-2'];

      if (index === 1) {
        classNames.push('sm-last');
      }

      return classNames;
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
      <VRow>
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
