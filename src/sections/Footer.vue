<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import UIFooter from '@/components/Footer/Footer.vue';
import UIFooterBody from '@/components/Footer/FooterBody.vue';
import UILink from '@/components/Link/Link.vue';

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
    UIFooter,
    UIFooterBody,
    UILink,
  },
};
</script>

<template>
  <UIFooter variant="light">
    <VGrid variant="container">
      <VRow>
        <VCol>
          <UIFooterBody variant="light">
            <UILink
              href="http://vivid-websolutions.nl"
              target="_blank"
              variant="light"
              rel="noopener noreferrer"
            >
              Vivid Websolutions
            </UILink>
          </UIFooterBody>
        </VCol>
      </VRow>
    </VGrid>
  </UIFooter>
</template>
