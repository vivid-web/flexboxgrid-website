<script>
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionGridAlignBottom',

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
      title: 'Bottom Alignment',
      subtitle: 'It is possible to align the columns at the bottom',
      codeExample,
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
      <div class="row row--sm-bottom">
        <div class="col col--sm-4">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea eligendi illo impedit placeat provident quod ut.
                Atque distinctio illo quisquam.
                Ab cupiditate distinctio, doloremque itaque laudantium maiores
                quibusdam reiciendis veritatis.
              </p>
              <p>
                A ad aliquid asperiores aut culpa dicta eaque expedita hic ipsa
                ipsam libero maiores minima nisi nobis perferendis quasi quis
                repudiandae, sint totam voluptatibus. Blanditiis iure natus perferendis
                voluptatem voluptatum?
              </p>
            </UIBlockContent>
          </UIBlock>
        </div>
        <div class="col col--sm-3">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea eligendi illo impedit placeat provident quod ut.
                Atque distinctio illo quisquam.
                Ab cupiditate distinctio, doloremque itaque laudantium maiores
                quibusdam reiciendis veritatis.
              </p>
              <p>
                A ad aliquid asperiores aut culpa dicta eaque expedita hic ipsa
                ipsam libero maiores minima nisi nobis perferendis quasi quis
                repudiandae, sint totam voluptatibus. Blanditiis iure natus perferendis
                voluptatem voluptatum?
              </p>
            </UIBlockContent>
          </UIBlock>
        </div>
        <div class="col col--sm-5">
          <UIBlock :variant="theme">
            <UIBlockContent :variant="theme">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea eligendi illo impedit placeat provident quod ut.
                Atque distinctio illo quisquam.
                Ab cupiditate distinctio, doloremque itaque laudantium maiores
                quibusdam reiciendis veritatis.
              </p>
              <p>
                A ad aliquid asperiores aut culpa dicta eaque expedita hic ipsa
                ipsam libero maiores minima nisi nobis perferendis quasi quis
                repudiandae, sint totam voluptatibus. Blanditiis iure natus perferendis
                voluptatem voluptatum?
              </p>
            </UIBlockContent>
          </UIBlock>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
