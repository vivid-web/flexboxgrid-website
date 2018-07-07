<script>
import SectionLayout from '@/sections/_Layout/Layout.vue';
import UIBlock from '@/components/Block/Block.vue';
import UIBlockContent from '@/components/Block/BlockContent.vue';

import codeExample from 'raw-loader!./code-example.html';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionGridception',

  /**
   * The components that this section can use.
   */
  components: {
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
      theme: 'dark',
      title: 'Grid in a Grid',
      subtitle: 'Grid components are infinitely nestable inside of other grid components',
      codeExample,
    };
  },
};
</script>

<template>
  <SectionLayout
    :theme="theme"
    :title="title"
    :subtitle="subtitle"
    :code-example="codeExample"
  >
    <div class="grid grid--container">
      <div class="row">
        <div class="col col--sm-2">
          <UIBlock :variant="theme">
            <UIBlockContent />
          </UIBlock>
        </div>
        <div class="col col--sm-10">
          <UIBlock :variant="theme">
            <UIBlockContent>
              <div class="row">
                <div class="col col--sm-2">
                  <UIBlock :variant="theme">
                    <UIBlockContent />
                  </UIBlock>
                </div>
                <div class="col col--sm-10">
                  <UIBlock :variant="theme">
                    <UIBlockContent>
                      <div class="row">
                        <div class="col col--sm-2">
                          <UIBlock :variant="theme">
                            <UIBlockContent />
                          </UIBlock>
                        </div>
                        <div class="col col--sm-10">
                          <UIBlock :variant="theme">
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
    </div>
  </SectionLayout>
</template>
