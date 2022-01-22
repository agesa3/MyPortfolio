import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
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
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkItem>Call</LinkItem>
          <LinkItem href="tel:+254708593702">+254 7085 937 02</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkItem>Email</LinkItem>
          <LinkItem href="mailto:agesacollins4299@gmail.com">agesacollins4299@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/agesa3">
          <AiFillGithub size="3rem" />
       </SocialIcons>
       <SocialIcons href="https://www.linkedin.com/in/agesa-collins-15b15917a/">
          <AiFillLinkedin size="3rem" />
       </SocialIcons>
       <SocialIcons href="https://twitter.com/AgesaCollins3">
          <AiFillTwitterCircle size="3rem" />
       </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
