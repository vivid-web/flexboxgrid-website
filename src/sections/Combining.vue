<template>
  <UISection variant="light">
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--md-12">
          <UISectionHeader variant="light">
            <UISectionTitle variant="light">
              Combining
            </UISectionTitle>
            <UISectionUnderline variant="light" />
            <UISectionSubtitle variant="light">
              It is possible to combine.
              Flexbox will automatically fill up the space
            </UISectionSubtitle>
          </UISectionHeader>
          <UISectionBody variant="light">
            <div class="row">
              <div class="col col--sm-2 col--sm-flex">
                <UIBlock variant="light">
                  <UIBlockContent variant="light">
                    <pre>col__sm-2</pre>
                  </UIBlockContent>
                </UIBlock>
              </div>
              <div class="col col--sm col--sm-flex">
                <UIBlock variant="light">
                  <UIBlockContent variant="light">
                    <pre>col__sm</pre>
                  </UIBlockContent>
                </UIBlock>
              </div>
              <div class="col col--sm-3 col--sm-offset-1 col--sm-flex">
                <UIBlock variant="light">
                  <UIBlockContent variant="light">
                    <pre>col--sm-3 & col--sm-offset-1</pre>
                  </UIBlockContent>
                </UIBlock>
              </div>
              <div class="col col--sm col--sm-offset-1 col--sm-flex">
                <UIBlock variant="light">
                  <UIBlockContent variant="light">
                    <pre>col--sm & col--sm-offset-1</pre>
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
    <div class="col col--sm-2">
      ...
    </div>
    <div class="col col--sm">
      ...
    </div>
    <div class="col col--sm-3 col--sm-offset-1">
      ...
    </div>
    <div class="col col--sm col--sm-offset-1">
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
      numberOfRows: 11,
      codeBlock,
    };
  },

  methods: {
    getColumnClassnames(columns, offset) {
      return [
        `col--sm-${columns}`,
        `col--sm-offset-${offset}`,
      ];
    },
  },
};
</script>
