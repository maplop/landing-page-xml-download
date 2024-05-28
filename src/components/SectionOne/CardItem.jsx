import { styled } from "@mui/material";
import PropTypes from "prop-types";

const CardItem = ({ icon, text }) => {
  return (
    <CardItemWrapper>
      <img src={icon} alt="icon" width={50} height={50} />
      <Text>{text}</Text>
    </CardItemWrapper>
  );
};

CardItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardItem;

const CardItemWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "16px 24px",

  [theme.breakpoints.down("sm")]: {
    borderRadius: 5,
  },

  "&:nth-child(1)": {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  "&:nth-child(2)": {
    backgroundColor: theme.palette.primary.light,
    borderWidth: "1px 0px",
    borderRadius: 0,

    [theme.breakpoints.down("sm")]: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 5,
    },
  },

  "&:last-child": {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,

    [theme.breakpoints.down("sm")]: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 5,
    },
  },
}));

const Text = styled("div")(({ theme }) => ({
  textAlign: "center",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",
  color: theme.palette.text.main,

  [theme.breakpoints.down("md")]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "16px",
  },
}));
