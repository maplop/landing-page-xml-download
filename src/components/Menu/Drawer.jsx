import { styled } from "@mui/material";
import CloseBtn from "./CloseBtn";
import { menuItems } from "./menuItems";

const Drawer = ({ isMenuOpen, handleIsMenuOpen }) => {
  return (
    <DrawerContainer isMenuOpen={isMenuOpen}>
      <DrawerContent>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleIsMenuOpen()}>
            <Link href={item.link}>{item.label}</Link>
          </MenuItem>
        ))}
        <CloseBtn handleIsMenuOpen={() => handleIsMenuOpen()} />
      </DrawerContent>
    </DrawerContainer>
  );
};
export default Drawer;

const DrawerContainer = styled("div")(({ isMenuOpen }) => ({
  position: "fixed",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, .7)",
  backdropFilter: "blur(10px)",
  overflow: "hidden",
  transition: "transform 0.5s ease-in-out",
  transform: `translateY(${isMenuOpen ? 0 : "120%"})`,
  zIndex: 999,
}));

const DrawerContent = styled("ul")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  padding: 0,
  listStyle: "none",
}));

const MenuItem = styled("li")(({}) => ({
  textAlign: "center",
}));

const Link = styled("a")(({ theme }) => ({
  fontSize: 24,
  fontWeight: 600,
  color: theme.palette.white.main,
  textDecoration: "none",
}));
