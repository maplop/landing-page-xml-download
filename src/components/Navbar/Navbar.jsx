import { styled } from "@mui/material";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo size={45} />
      <Menu />
    </NavbarContainer>
  );
};
export default Navbar;

const NavbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
