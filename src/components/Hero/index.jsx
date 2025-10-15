import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import StyledHero, {
  StyledText,
  StyledLeftContent,
  StyledRightContent,
  StyledImg,
} from "./index.styles";

const Hero = ({ marked }) => (
  <StyledHero marked={marked}>
    <StyledLeftContent>
      <div>
        <StyledText>Lorem ipsum dolor piscing</StyledText>
        <StyledText>sit amet, consectetur</StyledText>
        <StyledText marked>adipiscing elit</StyledText>
        <Button>Teste grátis por 30 dias</Button>
      </div>
    </StyledLeftContent>
    <StyledRightContent>
      <StyledImg />
    </StyledRightContent>
  </StyledHero>
);

Hero.propTypes = {
  marked: PropTypes.bool,
};

Hero.defaultProps = {
  marked: false,
};

export default Hero;
