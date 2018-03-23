<template>
  <UISection variant="dark">
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--md-12">
          <UISectionHeader variant="dark">
            <UISectionTitle variant="dark">
              Grid in a grid
            </UISectionTitle>
            <UISectionUnderline variant="dark" />
            <UISectionSubtitle variant="dark">
              Grid components are infinitely nestable inside of other grid components
            </UISectionSubtitle>
          </UISectionHeader>
          <UISectionBody variant="dark">
            <div class="row">
              <div class="col col--sm-2">
                <UIBlock variant="dark">
                  <UIBlockContent />
                </UIBlock>
              </div>
              <div class="col col--sm-10">
                <UIBlock variant="dark">
                  <UIBlockContent>
                    <div class="row">
                      <div class="col col--sm-2">
                        <UIBlock variant="dark">
                          <UIBlockContent />
                        </UIBlock>
                      </div>
                      <div class="col col--sm-10">
                        <UIBlock variant="dark">
                          <UIBlockContent>
                            <div class="row">
                              <div class="col col--sm-2">
                                <UIBlock variant="dark">
                                  <UIBlockContent />
                                </UIBlock>
                              </div>
                              <div class="col col--sm-10">
                                <UIBlock variant="dark">
                                  <UIBlockContent />
                                </UIBlock>
                              </div>
                            </div>
                          </UIBlockContent>
                        </UIBlock>
                      </div>
                    </div>
                  </UIBlockContent>
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
    <div class="col col--sm">
      <div class="col col--sm">
        <div class="col col--sm">
          ...
        </div>
      </div>
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
