import React from 'react';

import {
  Section,
  SectionText,
  SectionTextHero,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';
import BgPhotoProfile from '../BackgroundPhotoProfile/BackgroundPhotoProfile';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Wellcome To My Web
      </SectionTitle>
      <SectionTextHero>
        Hi, I am Zayyana Choir as a software engineer with over three
        years of professional experience. I have a strong background
        in Ruby developer and has worked for companies such as PT.
        Dwidasa Samsara Indonesia and Wellcode. I am currently a
        backend engineer at Datasintesa.
      </SectionTextHero>
      <SectionTextHero>
        I have a diverse skillset that includes languages such as
        Ruby, JavaScript, TypeScript, and Go. I am also proficient in
        frameworks such as Rails and NestJS, and has experience
        working with databases like SQL, NoSQL, and Redis.
        Additionally, I have experience working with AWS cloud
        services.
      </SectionTextHero>
      <SectionTextHero>
        I do not have a degree, but I have extensive experience in the
        field and is committed to continuous learning and professional
        development.
      </SectionTextHero>
      <Button
        onClick={() =>
          (window.location = 'https://wa.me/6285715834707')
        }
      >
        Get Started
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
