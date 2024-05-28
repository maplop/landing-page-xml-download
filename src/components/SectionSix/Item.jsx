import { styled } from "@mui/material";
import Dot from "./Dot";
import PropTypes from "prop-types";

const Item = ({ text }) => {
  return (
    <ItemContainer>
      <Dot />
      <Text>{text}</Text>
    </ItemContainer>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Item;

const ItemContainer = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,

  svg: {
    minWidth: 6,
  },
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "16px",
  color: theme.palette.text.main,
  margin: 0,
}));
