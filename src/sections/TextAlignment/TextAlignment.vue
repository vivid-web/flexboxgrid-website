<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-example="codeExample"
  >
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--sm-5">
          <UIBlock :variant="theme">
            <UIBlockContent
              :variant="theme"
              class="text--xs-center text--sm-left"
            >
              5
            </UIBlockContent>
          </UIBlock>
        </div>
        <div class="col col--sm-4">
          <UIBlock :variant="theme">
            <UIBlockContent
              :variant="theme"
              class="text--xs-center text--sm-center"
            >
              4
            </UIBlockContent>
          </UIBlock>
        </div>
        <div class="col col--sm-3">
          <UIBlock :variant="theme">
            <UIBlockContent
              :variant="theme"
              class="text--xs-center text--sm-right"
            >
              3
            </UIBlockContent>
          </UIBlock>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
<script>
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionTextAlignment',

  /**
   * The components that this section can use.
   */
  components: {
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
      codeExample,
    };
  },
};
</script>
