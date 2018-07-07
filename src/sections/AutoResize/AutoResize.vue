<script>
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionAutoResize',

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
      title: 'Auto Sizing',
      subtitle: 'According how many items there are displayed, flexbox will automatically compute the desired width',
      codeExample,
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
    :code-example="codeExample"
  >
    <div class="grid grid--container">
      <div
        v-for="(rowIndex) in numberOfRows"
        :key="rowIndex"
        class="row"
      >
        <div
          v-for="(colIndex) in rowIndex"
          :key="colIndex"
          class="col col--sm"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme" />
          </UIBlock>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
