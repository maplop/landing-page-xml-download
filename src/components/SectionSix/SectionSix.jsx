import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import { styled, Box } from "@mui/material";
import setUp from "../../assets/images/set-up.png";
import { itemsInfo } from "./itemsInfo";
import Item from "./Item";
import CustomButton from "../Button/CustomButton";

const SectionSix = () => {
  return (
    <SectionContainer>
      <ContentSection>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <TitleContainer>
            <SectionTitle title="Reportes de Retenciones sin Límites" />
            <SectionSubtitle subtitle="¿Te has preguntado cómo podrías simplificar la tediosa tarea de gestionar retenciones e información de pagos en tus comprobantes fiscales? MiAdminXML tiene la respuesta que necesitas." />
          </TitleContainer>
        </Box>
        <ImageContainer>
          <img src={setUp} alt="set up image" />
          <Square />
        </ImageContainer>
        <Content>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <TitleContainer>
              <SectionTitle title="Reportes de Retenciones sin Límites" />
              <SectionSubtitle subtitle="¿Te has preguntado cómo podrías simplificar la tediosa tarea de gestionar retenciones e información de pagos en tus comprobantes fiscales? MiAdminXML tiene la respuesta que necesitas." />
            </TitleContainer>
          </Box>
          <ItemContainer>
            {itemsInfo.map((info, index) => (
              <Item key={index} text={info} />
            ))}
          </ItemContainer>
          <ButtonsContainer>
            <CustomButton variant="primary" name="Obtenlo 30 días gratis" />
            <CustomButton variant="secondary" name="Ver precios" />
          </ButtonsContainer>
        </Content>
      </ContentSection>
    </SectionContainer>
  );
};
export default SectionSix;

const ContentSection = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 94,
  padding: "48px 0",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 24,
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: 360,
  height: 360,

  [theme.breakpoints.down("md")]: {
    width: 280,
    height: 280,
  },

  [theme.breakpoints.down("sm")]: {
    img: {
      width: "100%",
    },
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    height: "auto",
  },
}));

const Square = styled("div")(({ theme }) => ({
  position: "absolute",
  width: 360,
  height: 360,
  top: 45,
  left: 45,
  background: "rgba(114, 46, 209, 0.60)",
  filter: "blur(25px)",
  zIndex: -1,

  [theme.breakpoints.down("md")]: {
    width: 280,
    height: 280,
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Content = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  textAlign: "center",
  maxWidth: 670,
  margin: "0 auto",
  textAlign: "start",

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const ItemContainer = styled("div")(({}) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: 8,
  columnGap: 24,
}));

const ButtonsContainer = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 24,
  marginTop: 16,

  button: {
    width: "100%",
  },
}));
