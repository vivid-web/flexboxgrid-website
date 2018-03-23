<template>
  <UISection variant="light">
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--md-12">
          <UISectionHeader variant="light">
            <UISectionTitle variant="light">
              Auto sizing
            </UISectionTitle>
            <UISectionUnderline variant="light" />
            <UISectionSubtitle variant="light">
              According how many items there are displayed,
              flexbox will automatically compute the desired width
            </UISectionSubtitle>
          </UISectionHeader>
          <UISectionBody variant="light">
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
                <UIBlock variant="light">
                  <UIBlockContent variant="light" />
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
    <div class="col col--sm">
      ...
    </div>
    <div class="col col--sm">
      ...
    </div>
    <div class="col col--sm">
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
  name: 'SectionAutoResize',

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
      numberOfRows: 7,
      codeBlock,
    };
  },
};
</script>
