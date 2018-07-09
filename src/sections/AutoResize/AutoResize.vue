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
  name: 'SectionAutoResize',

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
      title: 'Auto Sizing',
      subtitle: 'According how many items there are displayed, flexbox will automatically compute the desired width',
      codeExamples: {
        html: codeExampleHtml,
        vue: codeExampleVue,
      },
      numberOfRows: 7,
    };
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
        v-for="(rowIndex) in numberOfRows"
        :key="rowIndex"
      >
        <VCol
          v-for="(colIndex) in rowIndex"
          :key="colIndex"
          variant="sm"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme"/>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
