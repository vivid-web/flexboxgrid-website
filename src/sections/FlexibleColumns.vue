<template>
  <UISection variant="light">
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--md-12">
          <UISectionHeader variant="light">
            <UISectionTitle variant="light">
              Flexible columns
            </UISectionTitle>
            <UISectionUnderline variant="light" />
            <UISectionSubtitle variant="light">
              It is possible to make the columns flexible
            </UISectionSubtitle>
          </UISectionHeader>
          <UISectionBody variant="light">
            <div class="row">
              <div class="col col--sm-4 col--sm-flex">
                <UIBlock variant="light">
                  <UIBlockContent variant="light">
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
              <div class="col col--sm-3 col--sm-flex">
                <UIBlock variant="light">
                  <UIBlockContent variant="light">
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
              <div class="col col--sm-5 col--sm-flex">
                <UIBlock variant="light">
                  <UIBlockContent variant="light">
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
            <div class="row">
              <div class="col">
                <UICode variant="light">{{ codeBlock }}</UICode>
              </div>
            </div>
          </UISectionBody>
        </div>
      </div>
    </div>
  </UISection>
</template>
<script>
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';
import UICode from '@/components/Code/Code.vue';
import UISection from '@/components/Section/Section.vue';
import UISectionBody from '@/components/Section/SectionBody.vue';
import UISectionHeader from '@/components/Section/SectionHeader.vue';
import UISectionSubtitle from '@/components/Section/SectionSubtitle.vue';
import UISectionTitle from '@/components/Section/SectionTitle.vue';
import UISectionUnderline from '@/components/Section/SectionUnderline.vue';

const codeBlock =
`<div class="grid grid--container">
  <div class="row">
    <div class="col col--sm col--sm-flex">
      ...
    </div>
    <div class="col col--sm col--sm-flex">
      ...
    </div>
    <div class="col col--sm col--sm-flex">
      ...
    </div>
    ...
  </div>
</div>
`;

export default {
  /**
   * The name of the section.
   */
  name: 'SectionOffset',

  /**
   * The components that this section can use.
   */
  components: {
    UIBlock,
    UIBlockContent,
    UICode,
    UISection,
    UISectionBody,
    UISectionHeader,
    UISectionSubtitle,
    UISectionTitle,
    UISectionUnderline,
  },

  data() {
    return {
      codeBlock,
    };
  },
};
</script>
