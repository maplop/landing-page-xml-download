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
      <img src={heroImg} alt="hero image" />
    </WrapperContent>
  );
};
export default HeroContent;

const WrapperContent = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 72,
}));

const InfoContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  maxWidth: 472,
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
}));

const MainText = styled("h1")(({ theme }) => ({
  fontSize: 48,
  fontWeight: 700,
  lineHeight: "normal",
  color: theme.palette.title.main,
  margin: 0,
}));

const SecondaryText = styled("p")(({}) => ({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",
  margin: 0,
}));
