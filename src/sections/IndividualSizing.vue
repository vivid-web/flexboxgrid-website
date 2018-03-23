<template>
  <UISection variant="dark">
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--md-12">
          <UISectionHeader variant="dark">
            <UISectionTitle variant="dark">
              Individual Sizing
            </UISectionTitle>
            <UISectionUnderline variant="dark" />
            <UISectionSubtitle variant="dark">
              It is possible to size the columns individually
            </UISectionSubtitle>
          </UISectionHeader>
          <UISectionBody variant="dark">
            <div
              v-for="(index) in numberOfRows"
              :key="index"
              class="row"
            >
              <div
                v-if="index <= 12"
                :class="getColumnClassnames(numberOfRows - index)"
                class="col"
              >
                <UIBlock variant="dark">
                  <UIBlockContent variant="dark" />
                </UIBlock>
              </div>
              <div
                v-if="index > 1"
                :class="getColumnClassnames(index - 1)"
                class="col"
              >
                <UIBlock variant="dark">
                  <UIBlockContent variant="dark" />
                </UIBlock>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <UICode variant="dark">{{ codeBlock }}</UICode>
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
    <div class="col col--sm-1">
      ...
    </div>
    <div class="col col--sm-2">
      ...
    </div>
    <div class="col col--sm-3">
      ...
    </div>
    <div class="col col--sm-4">
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
  name: 'SectionIndividualSizing',

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
      numberOfRows: 13,
      codeBlock,
    };
  },

  methods: {
    getColumnClassnames(numberOfColumns) {
      return `col--sm-${numberOfColumns}`;
    },
  },
};
</script>
