import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const MenuItem = ({ name, link, isActive }) => {
  return (
    <ItemLink to={link} isActive={isActive}>
      {name}
    </ItemLink>
  );
};
export default MenuItem;

const ItemLink = styled(Link)(({ theme, isActive }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 14,
  fontWeight: 500,
  color: isActive ? theme.palette.primary.main : theme.palette.black.main,
  textDecoration: "none",
}));
