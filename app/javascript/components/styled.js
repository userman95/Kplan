import styled, { css } from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";

export const NavBarWrapper = styled.div`
  display: flex;
  background-color: #343a40;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
`;

export const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  & > li > a {
    color: #ffffffa1;
  }
`;
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
export const SideMenu = withStyles({
  paper: {
    top: "56px",
  },
})(Drawer);
