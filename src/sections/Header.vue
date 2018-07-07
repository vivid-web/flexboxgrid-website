<script>
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
    <div class="grid grid--container">
      <UIJumbotronHeader variant="light">
        <div class="row">
          <div class="col col--md-12">
            <UIJumbotronTitle variant="light">
              Flexbox Grid
            </UIJumbotronTitle>
            <UIJumbotronUnderline variant="light"/>
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
              rel="noopener noreferrer"
            >
              Download Full
            </UIButton>
          </div>
          <div class="col col--md-4">
            <UIButton
              :variants="['primary', 'block']"
              href="https://raw.githubusercontent.com/vivid-web/flexbox-grid-stylus/master/dist/flexbox-grid.min.css"
              target="_blank"
              rel="noopener noreferrer"
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
                  <UIListItem variant="light">
                    <UIListItemTitle variant="light">
                      With Bower
                    </UIListItemTitle>
                    <UIListItemContent variant="light">
                      <UICode
                        variant="light"
                        content="bower install flexbox-grid-sass"
                        language="bash"
                      />
                    </UIListItemContent>
                  </UIListItem>
                  <UIListItem variant="light">
                    <UIListItemTitle variant="light">
                      With NPM
                    </UIListItemTitle>
                    <UIListItemContent variant="light">
                      <UICode
                        variant="light"
                        content="npm install flexbox-grid-sass"
                        language="bash"
                      />
                    </UIListItemContent>
                  </UIListItem>
                  <UIListItem variant="light">
                    <UIListItemContent variant="light">
                      <UIButton
                        variant="primary"
                        href="http://github.com/vivid-web/flexbox-grid-sass"
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
                  <UIListItem variant="light">
                    <UIListItemTitle variant="light">
                      With Bower
                    </UIListItemTitle>
                    <UIListItemContent variant="light">
                      <UICode
                        variant="light"
                        content="bower install flexbox-grid-less"
                        language="bash"
                      />
                    </UIListItemContent>
                  </UIListItem>
                  <UIListItem variant="light">
                    <UIListItemTitle variant="light">
                      With NPM
                    </UIListItemTitle>
                    <UIListItemContent variant="light">
                      <UICode
                        variant="light"
                        content="npm install flexbox-grid-less"
                        language="bash"
                      />
                    </UIListItemContent>
                  </UIListItem>
                  <UIListItem variant="light">
                    <UIListItemContent variant="light">
                      <UIButton
                        variant="primary"
                        href="http://github.com/vivid-web/flexbox-grid-less"
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
          </div>
          <div class="col col--md col--sm-flex">
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
                      With Bower
                    </UIListItemTitle>
                    <UIListItemContent variant="light">
                      <UICode
                        variant="light"
                        content="bower install flexbox-grid-stylus"
                        language="bash"
                      />
                    </UIListItemContent>
                  </UIListItem>
                  <UIListItem variant="light">
                    <UIListItemTitle variant="light">
                      With NPM
                    </UIListItemTitle>
                    <UIListItemContent variant="light">
                      <UICode
                        variant="light"
                        content="npm install flexbox-grid-stylus"
                        language="bash"
                      />
                    </UIListItemContent>
                  </UIListItem>
                  <UIListItem variant="light">
                    <UIListItemContent variant="light">
                      <UIButton
                        variant="primary"
                        href="http://github.com/vivid-web/flexbox-grid-stylus"
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
          </div>
        </div>
      </UIJumbotronBody>
    </div>
  </UIJumbotron>
</template>
