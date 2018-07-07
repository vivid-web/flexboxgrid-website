<script>
import SectionAutoResize from '@/sections/AutoResize/AutoResize.vue';
import SectionCombining from '@/sections/Combining/Combining.vue';
import SectionFlexibleColumns from '@/sections/FlexibleColumns/FlexibleColumns.vue';
import SectionFooter from '@/sections/Footer.vue';
import SectionFullWidth from '@/sections/FullWidth/FullWidth.vue';
import SectionHeader from '@/sections/Header.vue';
import SectionGridAlignBottom from '@/sections/GridAlignBottom/GridAlignBottom.vue';
import SectionGridAlignCenter from '@/sections/GridAlignCenter/GridAlignCenter.vue';
import SectionGridAlignTop from '@/sections/GridAlignTop/GridAlignTop.vue';
import SectionGridception from '@/sections/Gridception/Gridception.vue';
import SectionIndividualAlignment from '@/sections/IndividualAlignment/IndividualAlignment.vue';
import SectionIndividualSizing from '@/sections/IndividualSizing/IndividualSizing.vue';
import SectionNoGutter from '@/sections/NoGutter/NoGutter.vue';
import SectionOffset from '@/sections/Offset/Offset.vue';
import SectionResponsiveContent from '@/sections/ResponsiveContent/ResponsiveContent.vue';
import SectionSetColFirst from '@/sections/SetColFirst/SetColFirst.vue';
import SectionSetColLast from '@/sections/SetColLast/SetColLast.vue';
import SectionSetColReverse from '@/sections/SetColReverse/SetColReverse.vue';
import SectionTextAlignment from '@/sections/TextAlignment/TextAlignment.vue';

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
  name: 'App',

  /**
   * The components that this app can use.
   */
  components: {
    SectionAutoResize,
    SectionCombining,
    SectionFlexibleColumns,
    SectionFooter,
    SectionFullWidth,
    SectionHeader,
    SectionGridAlignBottom,
    SectionGridAlignCenter,
    SectionGridAlignTop,
    SectionGridception,
    SectionIndividualAlignment,
    SectionIndividualSizing,
    SectionNoGutter,
    SectionOffset,
    SectionResponsiveContent,
    SectionSetColFirst,
    SectionSetColLast,
    SectionSetColReverse,
    SectionTextAlignment,
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

<template>
  <div id="app">
    <SectionHeader/>
    <SectionIndividualSizing/>
    <SectionAutoResize/>
    <SectionOffset/>
    <SectionCombining/>
    <SectionGridception/>
    <SectionFullWidth/>
    <SectionResponsiveContent/>
    <SectionFlexibleColumns/>
    <SectionGridAlignTop/>
    <SectionGridAlignCenter/>
    <SectionGridAlignBottom/>
    <SectionIndividualAlignment/>
    <SectionSetColFirst/>
    <SectionSetColLast/>
    <SectionSetColReverse/>
    <SectionNoGutter/>
    <SectionTextAlignment/>
    <SectionFooter/>
  </div>
</template>
