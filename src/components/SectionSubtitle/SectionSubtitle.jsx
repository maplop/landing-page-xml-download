import { styled } from "@mui/material";
import PropTypes from "prop-types";

const SectionSubtitle = ({ subtitle }) => {
  return <Subtitle>{subtitle}</Subtitle>;
};

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default SectionSubtitle;

const Subtitle = styled("p")(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",
  margin: 0,
}));
