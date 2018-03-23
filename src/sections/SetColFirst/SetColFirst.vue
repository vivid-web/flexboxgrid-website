<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-example="codeExample"
  >
    <div class="grid grid--container">
      <div class="row">
        <div
          v-for="(index) in numberOfColumns"
          :key="index"
          :class="columnClassNames(index)"
          class="col col--sm-2"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variants="[theme, 'center']">
              {{ index }}
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
  name: 'SectionSetColFirst',

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
      title: 'Send Column to Start',
      subtitle: 'It is possible to send a column to the start',
      codeExample,
      numberOfColumns: 6,
    };
  },

  /**
   * The methods that this section can use.
   */
  methods: {
    /**
     * Will compute the column class names.
     *
     * @param {int} index The current index.
     *
     * @returns {Array} The array of class names.
     */
    columnClassNames(index) {
      const classNames = [];

      if (index === this.numberOfColumns) {
        classNames.push('col--sm-first');
      }

      return classNames;
    },
  },
};
</script>
