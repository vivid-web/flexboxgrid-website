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
    SectionAutoResize: () => import('@/sections/AutoResize/AutoResize.vue'),
    SectionCombining: () => import('@/sections/Combining/Combining.vue'),
    SectionFlexibleColumns: () => import('@/sections/FlexibleColumns/FlexibleColumns.vue'),
    SectionFooter: () => import('@/sections/Footer.vue'),
    SectionFullWidth: () => import('@/sections/FullWidth/FullWidth.vue'),
    SectionHeader: () => import('@/sections/Header.vue'),
    SectionGridAlignBottom: () => import('@/sections/GridAlignBottom/GridAlignBottom.vue'),
    SectionGridAlignCenter: () => import('@/sections/GridAlignCenter/GridAlignCenter.vue'),
    SectionGridAlignTop: () => import('@/sections/GridAlignTop/GridAlignTop.vue'),
    SectionGridception: () => import('@/sections/Gridception/Gridception.vue'),
    SectionIndividualAlignment: () => import('@/sections/IndividualAlignment/IndividualAlignment.vue'),
    SectionIndividualSizing: () => import('@/sections/IndividualSizing/IndividualSizing.vue'),
    SectionNoGutter: () => import('@/sections/NoGutter/NoGutter.vue'),
    SectionOffset: () => import('@/sections/Offset/Offset.vue'),
    SectionResponsiveContent: () => import('@/sections/ResponsiveContent/ResponsiveContent.vue'),
    SectionSetColFirst: () => import('@/sections/SetColFirst/SetColFirst.vue'),
    SectionSetColLast: () => import('@/sections/SetColLast/SetColLast.vue'),
    SectionSetColReverse: () => import('@/sections/SetColReverse/SetColReverse.vue'),
    SectionTextAlignment: () => import('@/sections/TextAlignment/TextAlignment.vue'),
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
