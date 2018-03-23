<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-example="codeExample"
  >
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--sm-2 col--sm-flex">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col__sm-2</pre>
            </UIBlockContent>
          </UIBlock>
        </div>
        <div class="col col--sm col--sm-flex">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col__sm</pre>
            </UIBlockContent>
          </UIBlock>
        </div>
        <div class="col col--sm-3 col--sm-offset-1 col--sm-flex">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col--sm-3 & col--sm-offset-1</pre>
            </UIBlockContent>
          </UIBlock>
        </div>
        <div class="col col--sm col--sm-offset-1 col--sm-flex">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <pre>col--sm & col--sm-offset-1</pre>
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
  name: 'SectionCombining',

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
      theme: 'light',
      title: 'Combining',
      subtitle: 'It is possible to combine. Flexbox will automatically fill up the space',
      codeExample,
    };
  },
};
</script>
