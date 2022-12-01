import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+6285715834707">
            +62 857-1583-4707
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:zaycho25@gmail.com">
            zaycho25@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Innovating one project at a time</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/zaychoer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/zaycho">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/zaycho">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
