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
    codeExample: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <UISection :variant="theme">
    <UISectionHeader :variant="theme">
      <div class="grid grid--container">
        <div class="row">
          <div class="col col--md-12">
            <UISectionTitle :variant="theme">
              {{ title }}
            </UISectionTitle>
            <UISectionUnderline :variant="theme" />
            <UISectionSubtitle :variant="theme">
              {{ subtitle }}
            </UISectionSubtitle>
          </div>
        </div>
      </div>
    </UISectionHeader>
    <UISectionBody :variant="theme">
      <slot />
      <div class="grid grid--container">
        <div class="row">
          <div class="col">
            <UICode
              :variant="theme"
              :content="codeExample"
              language="html"
            />
          </div>
        </div>
      </div>
    </UISectionBody>
  </UISection>
</template>
