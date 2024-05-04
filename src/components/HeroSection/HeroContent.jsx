import { Box, styled } from "@mui/material";
import CustomButton from "../Button/CustomButton";
import StartIcon from "./StarIcon";
import heroImg from "../../assets/images/hero-img.png";

const HeroContent = () => {
  return (
    <WrapperContent>
      <InfoContainer>
        <Tag>
          <StartIcon />
          v3.1 released
        </Tag>
        <MainText>Descarga Masiva de XML​</MainText>
        <SecondaryText>
          Con MiAdminXML Descarga, Administra y Controla de Forma masiva tus
          XML Emitidos y Recibidos directamente desde el portal del SAT, además
          genera reportes a Excel de tu información.
        </SecondaryText>
        <Box>
          <CustomButton name="Descargar MiAdminXML" />
        </Box>
      </InfoContainer>
      <ImgContainer>
        <img src={heroImg} alt="hero-image" style={{ objectFit: "contain" }} />
      </ImgContainer>
    </WrapperContent>
  );
};
export default HeroContent;

const WrapperContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 72,

  [theme.breakpoints.down("lg")]: {
    marginTop: 48,
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 24,
  },
}));

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  maxWidth: 372,

  [theme.breakpoints.down("lg")]: {
    gap: 24,
  },

  [theme.breakpoints.down("md")]: {
    gap: 16,
    maxWidth: 300,
  },

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    maxWidth: "none",
  },
}));

const Tag = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  padding: "8px 16px",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.light,
  borderRadius: 20,
  maxWidth: 160,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",

  [theme.breakpoints.down("lg")]: {
    fontSize: 14,
    lineHeight: "16px",
  },
}));

const MainText = styled("h1")(({ theme }) => ({
  fontSize: 48,
  fontWeight: 700,
  lineHeight: "normal",
  color: theme.palette.title.main,
  margin: 0,

  [theme.breakpoints.down("lg")]: {
    fontSize: 36,
    fontWeight: 700,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    fontWeight: 700,
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const SecondaryText = styled("p")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",
  margin: 0,

  [theme.breakpoints.down("lg")]: {
    fontSize: 14,
    lineHeight: "16px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: 12,
    lineHeight: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const ImgContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  img: {
    [theme.breakpoints.down("lg")]: {
      maxHeight: 350,
    },

    [theme.breakpoints.down("md")]: {
      maxHeight: 250,
    },
  },
}));
