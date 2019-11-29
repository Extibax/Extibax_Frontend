/* Modules */
import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 100%;
  height: 100%;

  .home_container {
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100%;
  }

  h1 {
    margin: 0;
  }

  @media only screen and (min-device-width: 900px) {
    .home_container {
      background-color: #fff;
      color: #000;
    }
  }
`;
