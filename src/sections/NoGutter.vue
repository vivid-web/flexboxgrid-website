<template>
  <UISection variant="light">
    <div class="grid grid--container grid--no-gutters">
      <div class="row row--no-gutters">
        <div class="col col--md-12 col--no-gutters">
          <UISectionHeader variant="light">
            <UISectionTitle variant="light">
              Reversing the columns
            </UISectionTitle>
            <UISectionUnderline variant="light" />
            <UISectionSubtitle variant="light">
              It is possible to reverse the columns
            </UISectionSubtitle>
          </UISectionHeader>
          <UISectionBody variant="light">
            <div class="row row--no-gutters">
              <div
                v-for="(index) in numberOfColumns"
                :key="index"
                :class="getColClassnames(index)"
                class="col col--no-gutters"
              >
                <UIBlock variant="light">
                  <UIBlockContent :variants="['light', 'center']">
                    {{ index }}
                  </UIBlockContent>
                </UIBlock>
              </div>
            </div>
            <div class="row row--no-gutters">
              <div class="col col--no-gutters">
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
`<div class="grid grid--container grid--no-gutters">
  <div class="row row--no-gutters">
    <div class="col col--sm col--no-gutters">
      ...
    </div>
    <div class="col col--sm col--no-gutters">
      ...
    </div>
    <div class="col col--sm col--no-gutters">
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
      numberOfColumns: 3,
    };
  },

  methods: {
    getColClassnames(index) {
      return `col--sm-${index + 2}`;
    },
  },
};
</script>
