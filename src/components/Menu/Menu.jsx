import { styled } from "@mui/material";
import Drawer from "./Drawer";
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <MenuBtn onClick={() => handleIsMenuOpen()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.25 9.25003C24.25 8.94204 24.1277 8.64666 23.9099 8.42887C23.6921 8.21109 23.3967 8.08874 23.0887 8.08874H1.41129C1.1033 8.08874 0.807918 8.21109 0.590134 8.42887C0.37235 8.64666 0.25 8.94204 0.25 9.25003C0.25 9.55802 0.37235 9.8534 0.590134 10.0712C0.807918 10.289 1.1033 10.4113 1.41129 10.4113H23.0887C23.3967 10.4113 23.6921 10.289 23.9099 10.0712C24.1277 9.8534 24.25 9.55802 24.25 9.25003ZM24.25 1.50809C24.25 1.2001 24.1277 0.90472 23.9099 0.686936C23.6921 0.469152 23.3967 0.346802 23.0887 0.346802H1.41129C1.1033 0.346802 0.807918 0.469152 0.590134 0.686936C0.37235 0.90472 0.25 1.2001 0.25 1.50809C0.25 1.81609 0.37235 2.11146 0.590134 2.32925C0.807918 2.54703 1.1033 2.66938 1.41129 2.66938H23.0887C23.3967 2.66938 23.6921 2.54703 23.9099 2.32925C24.1277 2.11146 24.25 1.81609 24.25 1.50809ZM24.25 16.992C24.25 16.684 24.1277 16.3886 23.9099 16.1708C23.6921 15.953 23.3967 15.8307 23.0887 15.8307H1.41129C1.1033 15.8307 0.807918 15.953 0.590134 16.1708C0.37235 16.3886 0.25 16.684 0.25 16.992C0.25 17.3 0.37235 17.5953 0.590134 17.8131C0.807918 18.0309 1.1033 18.1533 1.41129 18.1533H23.0887C23.3967 18.1533 23.6921 18.0309 23.9099 17.8131C24.1277 17.5953 24.25 17.3 24.25 16.992Z"
            fill="#E6E6E6"
          />
        </svg>
      </MenuBtn>
      <Drawer isMenuOpen={isMenuOpen} handleIsMenuOpen={handleIsMenuOpen} />
    </>
  );
};
export default Menu;

const MenuBtn = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    bottom: 25,
    right: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 46,
    height: 46,
    borderRadius: 6,
    background: theme.palette.primary.main,
  },
}));
