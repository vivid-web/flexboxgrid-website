<script>
import * as FlexboxgridVue from '@vivid-web/flexboxgrid-vue';
import UIButton from '@/components/Button/Button.vue';
import UICard from '@/components/Card/Card.vue';
import UICardHeader from '@/components/Card/CardHeader.vue';
import UICardBody from '@/components/Card/CardBody.vue';
import UICardList from '@/components/Card/CardList.vue';
import UIListItem from '@/components/ListItem/ListItem.vue';
import UIListItemContent from '@/components/ListItem/ListItemContent.vue';
import UIListItemTitle from '@/components/ListItem/ListItemTitle.vue';
import UICardTitle from '@/components/Card/CardTitle.vue';
import UICode from '@/components/Code/Code.vue';
import UIJumbotron from '@/components/Jumbotron/Jumbotron.vue';
import UIJumbotronBody from '@/components/Jumbotron/JumbotronBody.vue';
import UIJumbotronHeader from '@/components/Jumbotron/JumbotronHeader.vue';
import UIJumbotronSubtitle from '@/components/Jumbotron/JumbotronSubtitle.vue';
import UIJumbotronTitle from '@/components/Jumbotron/JumbotronTitle.vue';
import UIJumbotronUnderline from '@/components/Jumbotron/JumbotronUnderline.vue';

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
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Full
            </UIButton>
          </VCol>
          <VCol variant="md-4">
            <UIButton
              :variants="['primary', 'block']"
              href="https://raw.githubusercontent.com/vivid-web/flexboxgrid-stylus/master/dist/flexboxgrid.min.css"
              target="_blank"
              rel="noopener noreferrer"
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
                          target="_blank"
                          rel="noopener noreferrer"
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
                          target="_blank"
                          rel="noopener noreferrer"
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
                          target="_blank"
                          rel="noopener noreferrer"
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
                          target="_blank"
                          rel="noopener noreferrer"
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
