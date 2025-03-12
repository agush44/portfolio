import styled from "styled-components";

export const Button = styled.button`
  font-family: "IBM Plex Mono";
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: solid 0.125rem #121212;
  box-shadow: 0.25rem 0.25rem #121212;
  cursor: url("/clic.png"), pointer;
  transition: transform 50ms, box-shadow 50ms;

  &:active {
    transform: translate(0.125rem, 0.125rem);
    box-shadow: 0.25rem 0.25rem #121212;
  }
`;
