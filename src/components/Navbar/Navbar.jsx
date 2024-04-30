import { styled } from "@mui/material";
import Logo from "../Logo/Logo";
import CustomButton from "../Button/CustomButton";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo size={52} />
      <CustomButton name="Comenzar gratis" variant="secondary" />
    </NavbarContainer>
  );
};
export default Navbar;

const NavbarContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0px",
  opacity: 1,
});
