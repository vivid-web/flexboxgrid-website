<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-example="codeExample"
  >
    <div class="grid grid--container grid--no-gutters">
      <div class="row row--no-gutters">
        <div
          v-for="(index) in numberOfColumns"
          :key="index"
          :class="columnClassNames(index)"
          class="col col--no-gutters"
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
  name: 'SectionNoGutter',

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
      title: 'No Gutters',
      subtitle: 'The content can be displayed without the gutters',
      codeExample,
      numberOfColumns: 3,
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

      classNames.push(`col--sm-${index + 2}`);

      return classNames;
    },
  },
};
</script>
