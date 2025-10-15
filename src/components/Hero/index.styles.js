import styled, { css } from "styled-components";
import heroImg from "./hero.png";

export const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 48px 48px 72px 109px;
  width: 44%;

  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  button {
    margin-top: 24px;
  }
`;

export const StyledImg = styled.div`
  height: 100%;
  background-image: url(${heroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledRightContent = styled.div`
  width: 56%;

  @media (max-width: 800px) {
    width: 0%;
  }
`;

export const StyledText = styled.p`
  font-size: 48px;
  font-style: normal;
  font-weight: 300;
  line-height: 77px;
  letter-spacing: 0px;
  text-align: left;
  width: max-content;
  position: relative;
  z-index: 1;

  @media (max-width: 1373px) {
    font-size: 40px;
  }

  @media (max-width: 1204px) {
    font-size: 28px;
  }

  @media (max-width: 1078px) {
    font-size: 32px;
  }

  ${({ marked }) =>
    marked &&
    css`
      white-space: nowrap;

      &::before {
        content: "";
        height: 100%;
        background: #fde7e7;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -100vw;
        right: -20px;
        z-index: -1;

        @media (max-width: 800px) {
          right: -20px;
        }
      }
    `}
`;

export default styled.div`
  display: flex;
  position: relative;
  height: 515px;
  max-width: 100vw;

  @media (max-width: 800px) {
    height: auto;
  }
`;
