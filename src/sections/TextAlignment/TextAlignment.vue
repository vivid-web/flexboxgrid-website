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
  name: 'SectionTextAlignment',

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
      title: 'Text Alignment',
      subtitle: 'It is possible to align the text accordingly',
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
        <VCol variant="sm-5">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <VText :variants="['xs-center', 'sm-left']">5</VText>
            </UIBlockContent>
          </UIBlock>
        </VCol>
        <VCol variant="sm-4">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <VText :variants="['xs-center', 'sm-center']">4</VText>
            </UIBlockContent>
          </UIBlock>
        </VCol>
        <VCol variant="sm-3">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <VText :variants="['xs-center', 'sm-right']">3</VText>
            </UIBlockContent>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
