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
  name: 'SectionSetColReverse',

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
      title: 'Reversing the Columns',
      subtitle: 'It is possible to reverse the columns',
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
    <VGrid variant="container">
      <VRow variant="sm-reverse">
        <VCol
          v-for="(index) in numberOfColumns"
          :key="index"
          variant="sm-2"
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
