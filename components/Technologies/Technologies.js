import React from 'react';
import {
  DiFirebase,
  DiReact,
  DiGoogleCloudPlatform,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I&apos;ve worked with a range of technologies in the web
      development world. From Back-end to Front-end, I&apos;ve used a
      variety of languages and frameworks.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML & CSS <br />
            Tailwind CSS <br />
            JavaScript <br />
            TypeScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Ruby <br />
            JavaScript <br />
            TypeScript <br />
            GO <br />
            Databases (SQL, NoSQL) <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleCloudPlatform size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Service</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS Cloud Service <br />
            Vercel <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
