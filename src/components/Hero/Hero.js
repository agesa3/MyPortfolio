import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
      </SectionText>
    </LeftSection>
    <Button onClick={() => (window.location = "#contact")}>Learn More</Button>
  </Section>
);

export default Hero;
