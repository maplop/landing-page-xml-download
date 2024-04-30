import MenuItem from "./MenuItem";
import { styled } from "@mui/material";
import routes from "../../routes";
import CustomButton from "../Button/CustomButton";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem name="Inicio" link={routes.home} isActive={true} />
      <MenuItem name="Precios" link={routes.prices} />
      <MenuItem name="FAQs" link={routes.faqs} />
      <MenuItem name="Contacto" link={routes.contact} />
      <CustomButton name="Comenzar gratis" variant="secondary" />
    </MenuContainer>
  );
};
export default Menu;

const MenuContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 40,
  widthHug: "487px",
  heightHug: "38px",

}));
