import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";

const DownloadBtn = styled(Button)(({  isPrimary }) => ({
  width: "211px",
  height: "38px",
  padding: "12px 24px 12px 24px",
  gap: "10px",
  borderRadius: "23px",
  background: isPrimary ? "rgba(24, 144, 255, 1)":"rgba(114, 46, 209, 1)",
  fontFamily: "Metropolis",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "14px",
  textAlign: "left",
  color: "rgba(255, 255, 255, 1)",

}));

const DownloadButton = ({ name, variant = "primary" }) => {
  const isPrimary = variant === "primary";
  return (
    <DownloadBtn
      variant={isPrimary ? "contained" : "outlined"}
      isPrimary={isPrimary}
    >
      {name}
    </DownloadBtn>
  );
};
DownloadButton.propTypes = {
  name: PropTypes.string.isRequired, variant: PropTypes.string, };

export default DownloadButton;

