<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-example="codeExample"
  >
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--sm-4 col--sm-align-top">
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
              <p>
                A ad aliquid asperiores aut culpa dicta eaque expedita hic ipsa
                ipsam libero maiores minima nisi nobis perferendis quasi quis
                repudiandae, sint totam voluptatibus. Blanditiis iure natus perferendis
                voluptatem voluptatum?
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
        <div class="col col--sm-4 col--sm-align-center">
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
        <div class="col col--sm-4 col--sm-align-bottom">
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
<script>
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionIndividualAlignment',

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
      title: 'Individual Alignment',
      subtitle: 'It is possible to align the columns individually',
      codeExample,
    };
  },
};
</script>
