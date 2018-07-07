<script>
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionIndividualSizing',

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
      title: 'Individual Sizing',
      subtitle: 'It is possible to size the columns individually',
      codeExample,
      numberOfRows: 13,
    };
  },

  /**
   * The methods that this section can use.
   */
  methods: {
    /**
     * Will compute the column class names.
     *
     * @param {int} numberOfColumns The number of columns.
     *
     * @returns {Array} The array of class names.
     */
    columnClassNames(numberOfColumns) {
      const classNames = [];

      classNames.push(`col--sm-${numberOfColumns}`);

      return classNames;
    },
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
        v-for="(index) in numberOfRows"
        :key="index"
        class="row"
      >
        <div
          v-if="index <= 12"
          :class="columnClassNames(numberOfRows - index)"
          class="col"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme"/>
          </UIBlock>
        </div>
        <div
          v-if="index > 1"
          :class="columnClassNames(index - 1)"
          class="col"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme"/>
          </UIBlock>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
