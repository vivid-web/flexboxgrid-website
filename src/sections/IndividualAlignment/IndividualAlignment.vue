<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import SectionLayout from '@/sections/_Layout/Layout.vue';
import {
  Block as UIBlock,
  BlockContent as UIBlockContent,
} from '@/components';

import codeExampleHtml from './code-example.html';
import codeExampleVue from './code-example.vue';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionIndividualAlignment',

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
      theme: 'light',
      title: 'Individual Alignment',
      subtitle: 'It is possible to align the columns individually',
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
        <VCol :variants="['sm-4', 'sm-align-top']">
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
        </VCol>
        <VCol :variants="['sm-4', 'sm-align-center']">
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
        </VCol>
        <VCol :variants="['sm-4', 'sm-align-bottom']">
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
        </VCol>
      </VRow>
    </VGrid>
  </SectionLayout>
</template>
