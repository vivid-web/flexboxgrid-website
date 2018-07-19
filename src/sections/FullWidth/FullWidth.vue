<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import SectionLayout from '@/sections/_Layout/Layout.vue';
import {
  Block as UIBlock,
  BlockContent as UIBlockContent,
} from '@/components';

import codeExampleHtml from './examples/example.html';
import codeExampleVue from './examples/example.vue';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionFullWidth',

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
      title: 'Full Width',
      subtitle: 'It is possible to make the grid full width',
      codeExamples: {
        html: codeExampleHtml,
        vue: codeExampleVue,
      },
      numberOfColumns: 6,
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
    <VGrid>
      <VRow>
        <VCol
          v-for="(index) in numberOfColumns"
          :key="index"
          variant="sm-2"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme"/>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
