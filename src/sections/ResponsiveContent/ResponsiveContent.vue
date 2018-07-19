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
  name: 'SectionResponsiveContent',

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
      title: 'Responsive',
      subtitle: 'The content can be displayed on multiple devices',
      codeExamples: {
        html: codeExampleHtml,
        vue: codeExampleVue,
      },
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
      <VRow>
        <VCol variant="xs-8">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme" />
          </UIBlock>
        </VCol>
        <VCol variant="xs-4">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme" />
          </UIBlock>
        </VCol>
      </VRow>
      <VRow>
        <VCol :variants="['xs-2', 'md-4', 'lg-9', 'xl-10']">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme" />
          </UIBlock>
        </VCol>
        <VCol :variants="['xs-10', 'md-8', 'lg-3', 'xl-2']">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme" />
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
