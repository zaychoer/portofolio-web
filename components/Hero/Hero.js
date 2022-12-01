import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Wellcome To <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>
        I am a full stack developer, with a passion for creating
      </SectionText>
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
