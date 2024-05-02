import { styled } from "@mui/material";
import { renderIcon } from "./renderIcon";
import PropTypes from "prop-types";

/**
 * Componente que muestra un ítem con un ícono, título y texto.
 * @param {Object} props - Las props para el componente Item.
 * @param {number} props.number - El número para determinar el ícono a mostrar.
 * @param {string} props.title - El título del ítem.
 * @param {string} props.text - El texto del ítem.
 * @returns {JSX.Element} El componente Item renderizado.
 */

const Item = ({ number, title, text }) => {
  return (
    <ItemContainer>
      <IconContainer>{renderIcon(number)}</IconContainer>
      <TextContainer>
        <TextTitle>{title}</TextTitle>
        <Text>{text}</Text>
      </TextContainer>
    </ItemContainer>
  );
};

Item.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;

const ItemContainer = styled("div")(({}) => ({
  display: "flex",
  gap: 24,
}));

const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 56,
  height: 56,
  borderRadius: 8,
  backgroundColor: theme.palette.primary.light,
}));

const TextContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 6,
}));

const TextTitle = styled("p")(({ theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "18px",
  color: theme.palette.text.main,
  margin: 0,
}));

const Text = styled(TextTitle)(({}) => ({
  fontSize: 16,
  fontWeight: 500,
}));
