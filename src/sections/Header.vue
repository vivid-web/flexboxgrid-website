<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import {
  Button as UIButton,
  Card as UICard,
  CardHeader as UICardHeader,
  CardBody as UICardBody,
  CardList as UICardList,
  CardTitle as UICardTitle,
  Code as UICode,
  Jumbotron as UIJumbotron,
  JumbotronBody as UIJumbotronBody,
  JumbotronHeader as UIJumbotronHeader,
  JumbotronSubtitle as UIJumbotronSubtitle,
  JumbotronTitle as UIJumbotronTitle,
  JumbotronUnderline as UIJumbotronUnderline,
  ListItem as UIListItem,
  ListItemContent as UIListItemContent,
  ListItemTitle as UIListItemTitle,
} from '@/components';

export default {
  /**
   * The name of the section.
   */
  name: 'SectionHeader',

  /**
   * The components that this section can use.
   */
  components: {
    ...FlexboxgridVue,
    UIButton,
    UICard,
    UICardHeader,
    UICardBody,
    UICardList,
    UIListItem,
    UIListItemContent,
    UIListItemTitle,
    UICardTitle,
    UICode,
    UIJumbotron,
    UIJumbotronBody,
    UIJumbotronHeader,
    UIJumbotronSubtitle,
    UIJumbotronTitle,
    UIJumbotronUnderline,
  },
};
</script>

<template>
  <UIJumbotron variant="light">
    <VGrid variant="container">
      <UIJumbotronHeader variant="light">
        <VRow>
          <VCol variant="md-12">
            <UIJumbotronTitle variant="light">
              Flexbox Grid
            </UIJumbotronTitle>
            <UIJumbotronUnderline variant="light"/>
            <UIJumbotronSubtitle>
              A flex-based CSS grid system according to the BEM standard.
            </UIJumbotronSubtitle>
          </VCol>
        </VRow>
        <VRow>
          <VCol :variants="['md-4', 'md-offset-2']">
            <UIButton
              :variants="['primary', 'block']"
              href="https://raw.githubusercontent.com/vivid-web/flexboxgrid-stylus/master/dist/flexboxgrid.css"
              is-external
            >
              Download Full
            </UIButton>
          </VCol>
          <VCol variant="md-4">
            <UIButton
              :variants="['primary', 'block']"
              href="https://raw.githubusercontent.com/vivid-web/flexboxgrid-stylus/master/dist/flexboxgrid.min.css"
              is-external
            >
              Download Minified
            </UIButton>
          </VCol>
        </VRow>
      </UIJumbotronHeader>
      <UIJumbotronBody>
        <VGrid>
          <VRow>
            <VCol :variants="['md']">
              <UICard variant="light">
                <UICardHeader variant="light">
                  <UICardTitle variant="light">
                    With Vue
                  </UICardTitle>
                </UICardHeader>
                <UICardBody variant="light">
                  <UICardList variant="light">
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With NPM
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="npm install @vivid-web/flexboxgrid-vue --save"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With Yarn
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="yarn add flexboxgrid-vue"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>
                    <UIListItem variant="light">
                      <UIListItemContent variant="light">
                        <UIButton
                          variant="primary"
                          href="http://github.com/vivid-web/flexboxgrid-vue"
                          is-external
                        >
                          GitHub
                        </UIButton>
                      </UIListItemContent>
                    </UIListItem>
                  </UICardList>
                </UICardBody>
              </UICard>
            </VCol>
          </VRow>
          <VRow>
            <VCol :variants="['md-4', 'sm-flex']">
              <UICard variant="light">
                <UICardHeader variant="light">
                  <UICardTitle variant="light">
                    Using SASS
                  </UICardTitle>
                </UICardHeader>
                <UICardBody variant="light">
                  <UICardList variant="light">
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With NPM
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="npm install @vivid-web/flexboxgrid-sass --save"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With Yarn
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="yarn add @vivid-web/flexboxgrid-sass"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>
                    <UIListItem variant="light">
                      <UIListItemContent variant="light">
                        <UIButton
                          variant="primary"
                          href="http://github.com/vivid-web/flexboxgrid-sass"
                          is-external
                        >
                          GitHub
                        </UIButton>
                      </UIListItemContent>
                    </UIListItem>
                  </UICardList>
                </UICardBody>
              </UICard>
            </VCol>
            <VCol :variants="['md-4', 'sm-flex']">
              <UICard variant="light">
                <UICardHeader variant="light">
                  <UICardTitle variant="light">
                    Using LESS
                  </UICardTitle>
                </UICardHeader>
                <UICardBody variant="light">
                  <UICardList variant="light">
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With NPM
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="npm install @vivid-web/flexboxgrid-less --save"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With Yarn
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="yarn add @vivid-web/flexboxgrid-less"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>

                    <UIListItem variant="light">
                      <UIListItemContent variant="light">
                        <UIButton
                          variant="primary"
                          href="http://github.com/vivid-web/flexboxgrid-less"
                          is-external
                        >
                          GitHub
                        </UIButton>
                      </UIListItemContent>
                    </UIListItem>
                  </UICardList>
                </UICardBody>
              </UICard>
            </VCol>
            <VCol :variants="['md-4', 'sm-flex']">
              <UICard variant="light">
                <UICardHeader variant="light">
                  <UICardTitle variant="light">
                    Using Stylus
                  </UICardTitle>
                </UICardHeader>
                <UICardBody variant="light">
                  <UICardList variant="light">
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With NPM
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="npm install @vivid-web/flexboxgrid-stylus --save"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>
                    <UIListItem variant="light">
                      <UIListItemTitle variant="light">
                        With Yarn
                      </UIListItemTitle>
                      <UIListItemContent variant="light">
                        <UICode
                          variant="light"
                          content="yarn add @vivid-web/flexboxgrid-stylus"
                          language="bash"
                        />
                      </UIListItemContent>
                    </UIListItem>
                    <UIListItem variant="light">
                      <UIListItemContent variant="light">
                        <UIButton
                          variant="primary"
                          href="http://github.com/vivid-web/flexboxgrid-stylus"
                          is-external
                        >
                          GitHub
                        </UIButton>
                      </UIListItemContent>
                    </UIListItem>
                  </UICardList>
                </UICardBody>
              </UICard>
            </VCol>
          </VRow>
        </VGrid>
      </UIJumbotronBody>
    </VGrid>
  </UIJumbotron>
</template>
