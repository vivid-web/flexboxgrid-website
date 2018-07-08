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
  name: 'SectionIndividualSizing',

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
      title: 'Individual Sizing',
      subtitle: 'It is possible to size the columns individually',
      codeExample,
      numberOfRows: 13,
    };
  },

  /**
   * The methods that this section can use.
   */
  methods: {
    /**
     * Will compute the column variant.
     *
     * @param {int} numberOfColumns The number of columns.
     *
     * @returns {String} The column variant.
     */
    columnVariant(numberOfColumns) {
      return `sm-${numberOfColumns}`;
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
      <VRow
        v-for="(index) in numberOfRows"
        :key="index"
      >
        <VCol
          v-if="index <= 12"
          :variant="columnVariant(numberOfRows - index)"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme"/>
          </UIBlock>
        </VCol>
        <VCol
          v-if="index > 1"
          :variant="columnVariant(index - 1)"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme"/>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
