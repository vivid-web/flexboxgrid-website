export default `<!-- Vue -->
<VGrid variant="container">
  <VRow>
    <VCol variant="sm-2">
      ...
    </VCol>
    <VCol variant="sm">
      ...
    </VCol>
    <VCol :variants="['sm-3', 'sm-offset-1']">
      ...
    </VCol>
    <VCol :variants="['sm', 'sm-offset-1']">
      ...
    </VCol>
  </VRow>
</VGrid>`;
