import { styled } from "@mui/material";
import CustomButton from "../Button/CustomButton";
import CheckIcon from "./CheckIcon";
import DiamondIcon from "./DiamondIcon";
import PropTypes from "prop-types";

const CardPrice = ({ data, iconColor }) => {
  const {
    plan,
    price,
    textInfo,
    buttonText,
    style,
    textInfo2,
    licenseOptions,
  } = data;

  const isPrimary = style === "primary";

  return (
    <CardContainer>
      <PlanTypeContainer>
        <PlanType>
          {plan}
          {plan === "Pro" && <DiamondIcon />}
        </PlanType>
      </PlanTypeContainer>
      <PriceSection isPrimary={isPrimary}>
        <Price isPrimary={isPrimary}>{price}</Price>
        <ButtonContainer>
          <TextInfo isPrimary={isPrimary}>{textInfo}</TextInfo>
          <CustomButton name={buttonText} variant={style} />
        </ButtonContainer>
      </PriceSection>
      <PlanOptions>
        <ItemText isPrimary={isPrimary}>{textInfo2}</ItemText>
        {licenseOptions.map((option, index) => (
          <ItemContainer key={index}>
            <CheckIcon color={iconColor} />
            <ItemText isPrimary={isPrimary}>{option}</ItemText>
          </ItemContainer>
        ))}
      </PlanOptions>
    </CardContainer>
  );
};

CardPrice.propTypes = {
  data: PropTypes.shape({
    plan: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    textInfo: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    style: PropTypes.string,
    textInfo2: PropTypes.string,
    licenseOptions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  iconColor: PropTypes.string.isRequired,
};

export default CardPrice;

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "16px 16px 24px",
  borderRadius: 8,
  border: `1px solid ${theme.palette.primary.main}`,
  background: theme.palette.white.main,
  boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.24)",
  minWidth: 240,

  ":nth-child(2)": {
    background:
      "linear-gradient(190deg, rgba(114, 46, 209, 0.87) -0.02%, #3A186B 82.65%)",
  },
}));

const PlanTypeContainer = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

const PlanType = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "4px 16px",
  gap: 6,
  borderRadius: 20,
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.primary.light,
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "24px",
  color: theme.palette.primary.main,
}));

const PriceSection = styled("div")(({ theme, isPrimary }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  padding: 24,
  borderRadius: 10,
  border: `1px solid ${
    isPrimary ? theme.palette.primary.main : theme.palette.primary.light
  }`,
}));

const Price = styled("div")(({ theme, isPrimary }) => ({
  fontSize: 32,
  fontWeight: 700,
  lineHeight: "normal",
  color: isPrimary ? theme.palette.black.main : theme.palette.white.main,
}));

const ButtonContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const TextInfo = styled("p")(({ theme, isPrimary }) => ({
  margin: 0,
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "12px",
  color: isPrimary ? theme.palette.text.main : theme.palette.primary.light,
  textAlign: "start",

  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
  },
}));

const PlanOptions = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingTop: 16,
  gap: 12,
  alignSelf: "stretch",
}));

const ItemContainer = styled("div")(({}) => ({
  display: "flex",
  gap: 8,

  svg: {
    minWidth: 18,
  },
}));

const ItemText = styled("p")(({ theme, isPrimary }) => ({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "16px",
  margin: 0,
  color: isPrimary ? theme.palette.text.main : theme.palette.primary.light,
  textAlign: "start",
}));
