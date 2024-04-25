import { styled } from "@mui/material";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const NavbarContainer = styled("div")({
  display: "flex",
  width: "960px",
  height: "52px",
  gap: "0px",
  justifyContent: "space-between",
  opacity: 1,
});

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo size={52} />
      <Menu />
    </NavbarContainer>
  );
};
export default Navbar;


