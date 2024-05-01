import { styled } from "@mui/material";
import PropTypes from "prop-types";

const CardItem = ({ title, text }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

CardItem.propTypes = {
  tile: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardItem;

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: "16px 24px",
  backgroundColor: theme.palette.white.main,
  boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.20)",
}));

const CardTitle = styled("p")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "24px",
  margin: 0,
  color: theme.palette.secondary.main,
}));

const CardText = styled("p")(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "18px",
  margin: 0,
  color: theme.palette.text.main,
}));
