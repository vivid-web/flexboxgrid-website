<template>
  <UIFooter variant="light">
    <div class="grid grid--container">
      <UIFooterBody variant="light">
        <UILink
          href="http://vivid-websolutions.nl"
          target="_blank"
          variant="light"
          rel="noopener"
        >
          Vivid Websolutions
        </UILink>
      </UIFooterBody>
    </div>
  </UIFooter>
</template>
<script>
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
    UIFooter,
    UIFooterBody,
    UILink,
  },
};
</script>
