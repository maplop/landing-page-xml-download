import { Button, styled } from "@mui/material";

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
export default CustomButton;

const CustomBtn = styled(Button)(({ theme, isPrimary }) => ({
  fontSize: 14,
  lineHeight: "100%",
  padding: "10px 24px",
  textTransform: "none",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 23,


}));