<template>
  <UIJumbotron variant="light">
    <div class="grid grid--container">
      <UIJumbotronHeader variant="light">
        <div class="row">
          <div class="col col--md-12">
            <UIJumbotronTitle variant="light">
              Flexbox Grid
            </UIJumbotronTitle>
            <UIJumbotronUnderline variant="light" />
            <UIJumbotronSubtitle>
              A flex-based CSS grid system according to the BEM standard.
            </UIJumbotronSubtitle>
          </div>
        </div>
        <div class="row">
          <div class="col col--md-4 col--md-offset-2">
            <UIButton
              :variants="['primary', 'block']"
              href="https://raw.githubusercontent.com/vivid-web/flexbox-grid-stylus/master/dist/flexbox-grid.css"
              target="_blank"
              rel="noopener"
            >
              Download Full
            </UIButton>
          </div>
          <div class="col col--md-4">
            <UIButton
              :variants="['primary', 'block']"
              href="https://raw.githubusercontent.com/vivid-web/flexbox-grid-stylus/master/dist/flexbox-grid.min.css"
              target="_blank"
              rel="noopener"
            >
              Download Minified
            </UIButton>
          </div>
        </div>
      </UIJumbotronHeader>
      <UIJumbotronBody>
        <div class="row">
          <div class="col col--md col--sm-flex">
            <UICard variant="light">
              <UICardHeader variant="light">
                <UICardTitle variant="light">
                  Using SASS
                </UICardTitle>
              </UICardHeader>
              <UICardBody variant="light">
                <UICardList variant="light">
                  <UICardListItem variant="light">
                    <UICardListItemTitle variant="light">
                      With Bower
                    </UICardListItemTitle>
                    <UICardListItemContent variant="light">
                      <UICode variant="light">bower install flexbox-grid-sass</UICode>
                    </UICardListItemContent>
                  </UICardListItem>
                  <UICardListItem variant="light">
                    <UICardListItemTitle variant="light">
                      With NPM
                    </UICardListItemTitle>
                    <UICardListItemContent variant="light">
                      <UICode variant="light">npm install flexbox-grid-sass</UICode>
                    </UICardListItemContent>
                  </UICardListItem>
                  <UICardListItem variant="light">
                    <UICardListItemContent variant="light">
                      <UIButton
                        variant="primary"
                        href="http://github.com/vivid-web/flexbox-grid-sass"
                        target="_blank"
                        rel="noopener"
                      >
                        GitHub
                      </UIButton>
                    </UICardListItemContent>
                  </UICardListItem>
                </UICardList>
              </UICardBody>
            </UICard>
          </div>
          <div class="col col--md col--sm-flex">
            <UICard variant="light">
              <UICardHeader variant="light">
                <UICardTitle variant="light">
                  Using LESS
                </UICardTitle>
              </UICardHeader>
              <UICardBody variant="light">
                <UICardList variant="light">
                  <UICardListItem variant="light">
                    <UICardListItemTitle variant="light">
                      With Bower
                    </UICardListItemTitle>
                    <UICardListItemContent variant="light">
                      <UICode variant="light">bower install flexbox-grid-less</UICode>
                    </UICardListItemContent>
                  </UICardListItem>
                  <UICardListItem variant="light">
                    <UICardListItemTitle variant="light">
                      With NPM
                    </UICardListItemTitle>
                    <UICardListItemContent variant="light">
                      <UICode variant="light">npm install flexbox-grid-less</UICode>
                    </UICardListItemContent>
                  </UICardListItem>
                  <UICardListItem variant="light">
                    <UICardListItemContent variant="light">
                      <UIButton
                        variant="primary"
                        href="http://github.com/vivid-web/flexbox-grid-less"
                        target="_blank"
                        rel="noopener"
                      >
                        GitHub
                      </UIButton>
                    </UICardListItemContent>
                  </UICardListItem>
                </UICardList>
              </UICardBody>
            </UICard>
          </div><div class="col col--md col--sm-flex">
            <UICard variant="light">
              <UICardHeader variant="light">
                <UICardTitle variant="light">
                  Using Stylus
                </UICardTitle>
              </UICardHeader>
              <UICardBody variant="light">
                <UICardList variant="light">
                  <UICardListItem variant="light">
                    <UICardListItemTitle variant="light">
                      With Bower
                    </UICardListItemTitle>
                    <UICardListItemContent variant="light">
                      <UICode variant="light">bower install flexbox-grid-stylus</UICode>
                    </UICardListItemContent>
                  </UICardListItem>
                  <UICardListItem variant="light">
                    <UICardListItemTitle variant="light">
                      With NPM
                    </UICardListItemTitle>
                    <UICardListItemContent variant="light">
                      <UICode variant="light">npm install flexbox-grid-stylus</UICode>
                    </UICardListItemContent>
                  </UICardListItem>
                  <UICardListItem variant="light">
                    <UICardListItemContent variant="light">
                      <UIButton
                        variant="primary"
                        href="http://github.com/vivid-web/flexbox-grid-stylus"
                        target="_blank"
                        rel="noopener"
                      >
                        GitHub
                      </UIButton>
                    </UICardListItemContent>
                  </UICardListItem>
                </UICardList>
              </UICardBody>
            </UICard>
          </div>
        </div>
      </UIJumbotronBody>
    </div>
  </UIJumbotron>
</template>
<script>
import UIButton from '@/components/Button/Button.vue';
import UICard from '@/components/Card/Card.vue';
import UICardHeader from '@/components/Card/CardHeader.vue';
import UICardBody from '@/components/Card/CardBody.vue';
import UICardList from '@/components/Card/CardList.vue';
import UICardListItem from '@/components/Card/CardListItem.vue';
import UICardListItemContent from '@/components/Card/CardListItemContent.vue';
import UICardListItemTitle from '@/components/Card/CardListItemTitle.vue';
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
    UIButton,
    UICard,
    UICardHeader,
    UICardBody,
    UICardList,
    UICardListItem,
    UICardListItemContent,
    UICardListItemTitle,
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
