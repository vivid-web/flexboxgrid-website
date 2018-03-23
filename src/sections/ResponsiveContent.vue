<template>
  <UISection variant="dark">
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--md-12">
          <UISectionHeader variant="dark">
            <UISectionTitle variant="dark">
              Responsive
            </UISectionTitle>
            <UISectionUnderline variant="dark" />
            <UISectionSubtitle variant="dark">
              The content can be displayed on multiple devices
            </UISectionSubtitle>
          </UISectionHeader>
          <UISectionBody variant="dark">
            <div class="row">
              <div class="col col--xs-8">
                <UIBlock variant="dark">
                  <UIBlockContent variant="dark" />
                </UIBlock>
              </div>
              <div class="col col--xs-4">
                <UIBlock variant="dark">
                  <UIBlockContent variant="dark" />
                </UIBlock>
              </div>
            </div>
            <div class="row">
              <div class="col col--xs-2 col--md-4 col--lg-9 col--xl-10">
                <UIBlock variant="dark">
                  <UIBlockContent variant="dark" />
                </UIBlock>
              </div>
              <div class="col col--xs-10 col--md-8 col--lg-3 col--xl-2">
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
    <div class="col col--xs-2 col--md-4 col--lg-9 col--xl-10">
      ...
    </div>
    <div class="col col--xs-10 col--md-8 col--lg-3 col--xl-2">
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
      numberOfColumns: 6,
    };
  },
};
</script>
