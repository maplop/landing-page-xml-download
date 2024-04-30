import { styled } from "@mui/material";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;

const Title = styled("h1")(({ theme }) => ({
  color: theme.palette.title.main,
  fontSize: 32,
  fontWeight: 700,
  lineHeight: "40px",
  margin: 0,
}));
