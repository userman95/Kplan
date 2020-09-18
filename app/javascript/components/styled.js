import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Some = styled.div`
  padding: 25px;
  background-color: black;
  color: white;
`;

export const Text = styled(Typography)`
  ${(props) =>
    props.mycolor &&
    css`
      color: ${props.mycolor};
    `}
`;
