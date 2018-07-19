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
  name: 'SectionCombining',

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
      title: 'Combining',
      subtitle: 'It is possible to combine. Flexbox will automatically fill up the space',
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
        <VCol :variants="['sm-2', 'sm-flex']">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col__sm-2</pre>
            </UIBlockContent>
          </UIBlock>
        </VCol>
        <VCol :variants="['sm', 'sm-flex']">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col__sm</pre>
            </UIBlockContent>
          </UIBlock>
        </VCol>
        <VCol :variants="['sm-3', 'sm-offset-1', 'sm-flex']">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col--sm-3 & col--sm-offset-1</pre>
            </UIBlockContent>
          </UIBlock>
        </VCol>
        <VCol :variants="['sm', 'sm-offset-1', 'sm-flex']">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col--sm & col--sm-offset-1</pre>
            </UIBlockContent>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
