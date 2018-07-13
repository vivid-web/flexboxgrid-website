<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import {
  Block as UIBlock,
  BlockContent as UIBlockContent,
  Code as UICode,
  Section as UISection,
  SectionBody as UISectionBody,
  SectionHeader as UISectionHeader,
  SectionSubtitle as UISectionSubtitle,
  SectionTitle as UISectionTitle,
  SectionUnderline as UISectionUnderline,
} from '@/components';


export default {
  /**
   * The name of the section.
   */
  name: 'SectionAutoResize',

  /**
   * The components that this section can use.
   */
  components: {
    ...FlexboxgridVue,
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

  /**
   * The properties that this section accepts.
   */
  props: {
    /**
     * The title of the section.
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * The subtitle of the section.
     */
    subtitle: {
      type: String,
      required: true,
    },

    /**
     * The theme of the section.
     */
    theme: {
      type: String,
      required: true,
      validator(value) {
        const accepted = ['light', 'dark'];

        return accepted.includes(value);
      },
    },

    /**
     * The code example of the section.
     */
    codeExamples: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <UISection :variant="theme">
    <UISectionHeader :variant="theme">
      <VGrid variant="container">
        <VRow>
          <VCol variant="md-12">
            <UISectionTitle :variant="theme">
              {{ title }}
            </UISectionTitle>
            <UISectionUnderline :variant="theme"/>
            <UISectionSubtitle :variant="theme">
              {{ subtitle }}
            </UISectionSubtitle>
          </VCol>
        </VRow>
      </VGrid>
    </UISectionHeader>
    <UISectionBody :variant="theme">
      <slot/>
      <VGrid variant="container">
        <VRow>
          <VCol variant="md-6">
            <UICode
              :variant="theme"
              :content="codeExamples.vue"
              language="html"
            />
          </VCol>
          <VCol variant="md-6">
            <UICode
              :variant="theme"
              :content="codeExamples.html"
              language="html"
            />
          </VCol>
        </VRow>
      </VGrid>
    </UISectionBody>
  </UISection>
</template>
