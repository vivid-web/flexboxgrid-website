<script>
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionOffset',

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
      title: 'Offset',
      subtitle: 'It is possible to add offset to the columns',
      codeExample,
      numberOfRows: 11,
    };
  },

  /**
   * The methods that this section can use.
   */
  methods: {
    /**
     * Will compute the column class names.
     *
     * @param {int} columns The number of columns.
     * @param {int} offset  The amount of offset.
     *
     * @returns {Array} The array of class names.
     */
    columnClassNames(columns, offset) {
      const classNames = [];

      classNames.push(`col--sm-${columns}`);
      classNames.push(`col--sm-offset-${offset}`);

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
          :class="columnClassNames(index, 12 - index)"
          class="col"
        >
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme" />
          </UIBlock>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
