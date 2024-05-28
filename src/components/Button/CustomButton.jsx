import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({ name, variant = "primary" }) => {
  const isPrimary = variant === "primary";
  return (
    <CustomBtn
      variant={isPrimary ? "contained" : "outlined"}
      isPrimary={isPrimary}
    >
      {name}
    </CustomBtn>
  );
};

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default CustomButton;

const CustomBtn = styled(Button)(({ theme, isPrimary }) => ({
  fontSize: 14,
  lineHeight: "100%",
  padding: "10px 24px",
  textTransform: "none",
  maxHeight: 38,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 23,
  background: isPrimary ? theme.palette.primary.main : theme.palette.white.main,

  ":hover": {
    background: !isPrimary && theme.palette.primary.light,
  },

  [theme.breakpoints.down("lg")]: {
    fontSize: 12,
  },
}));
