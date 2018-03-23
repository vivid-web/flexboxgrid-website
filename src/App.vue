<template>
  <div id="app">
    <SectionHeader />
    <SectionIndividualSizing />
    <SectionAutoResize />
    <SectionOffset />
    <SectionCombining />
    <SectionGridception />
    <SectionFullWidth />
    <SectionResponsiveContent />
    <SectionFlexibleColumns />
    <SectionGridAlignTop />
    <SectionGridAlignCenter />
    <SectionGridAlignBottom />
    <SectionIndividualAlignment />
    <SectionSetColFirst />
    <SectionSetColLast />
    <SectionSetColReverse />
    <SectionNoGutter />
    <SectionTextAlignment />
    <SectionFooter />
  </div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application.
 */

export default {

  /**
   * The name of the application.
   */
  name: 'FlexboxGridWebsite',

  /**
   * The components that this app can use.
   */
  components: {
    SectionAutoResize: () => import('@/sections/AutoResize.vue'),
    SectionCombining: () => import('@/sections/Combining.vue'),
    SectionFullWidth: () => import('@/sections/FullWidth.vue'),
    SectionFlexibleColumns: () => import('@/sections/FlexibleColumns.vue'),
    SectionFooter: () => import('@/sections/Footer.vue'),
    SectionHeader: () => import('@/sections/Header.vue'),
    SectionGridception: () => import('@/sections/Gridception.vue'),
    SectionGridAlignBottom: () => import('@/sections/GridAlignBottom.vue'),
    SectionGridAlignCenter: () => import('@/sections/GridAlignCenter.vue'),
    SectionGridAlignTop: () => import('@/sections/GridAlignTop.vue'),
    SectionIndividualAlignment: () => import('@/sections/IndividualAlignment.vue'),
    SectionIndividualSizing: () => import('@/sections/IndividualSizing.vue'),
    SectionNoGutter: () => import('@/sections/NoGutter.vue'),
    SectionOffset: () => import('@/sections/Offset.vue'),
    SectionResponsiveContent: () => import('@/sections/ResponsiveContent.vue'),
    SectionSetColFirst: () => import('@/sections/SetColFirst.vue'),
    SectionSetColLast: () => import('@/sections/SetColLast.vue'),
    SectionSetColReverse: () => import('@/sections/SetColReverse.vue'),
    SectionTextAlignment: () => import('@/sections/TextAlignment.vue'),
  },

  /**
   * This method is fired when the component has been mounted.
   */
  mounted() {
    this.$analytics
      .pageview('/')
      .send();
  },
};
</script>
