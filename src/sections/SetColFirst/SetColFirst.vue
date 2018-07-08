<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionSetColFirst',

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
      title: 'Send Column to Start',
      subtitle: 'It is possible to send a column to the start',
      codeExample,
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

      if (index === this.numberOfColumns) {
        classNames.push('sm-first');
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
    :code-example="codeExample"
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
