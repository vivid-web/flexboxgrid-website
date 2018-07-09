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
  name: 'SectionGridception',

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
      title: 'Grid in a Grid',
      subtitle: 'Grid components are infinitely nestable inside of other grid components',
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
        <VCol variant="sm-2">
          <UIBlock :variant="theme">
            <UIBlockContent />
          </UIBlock>
        </VCol>
        <VCol variant="sm-10">
          <UIBlock :variant="theme">
            <UIBlockContent>
              <VRow>
                <VCol variant="sm-2">
                  <UIBlock :variant="theme">
                    <UIBlockContent />
                  </UIBlock>
                </VCol>
                <VCol variant="sm-10">
                  <UIBlock :variant="theme">
                    <UIBlockContent>
                      <VRow>
                        <VCol variant="sm-2">
                          <UIBlock :variant="theme">
                            <UIBlockContent />
                          </UIBlock>
                        </VCol>
                        <VCol variant="sm-10">
                          <UIBlock :variant="theme">
                            <UIBlockContent />
                          </UIBlock>
                        </VCol>
                      </VRow>
                    </UIBlockContent>
                  </UIBlock>
                </VCol>
              </VRow>
            </UIBlockContent>
          </UIBlock>
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
