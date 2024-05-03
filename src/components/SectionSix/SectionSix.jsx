import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import { styled } from "@mui/material";
import setUp from "../../assets/images/set-up.png";
import { itemsInfo } from "./itemsInfo";
import Item from "./Item";
import CustomButton from "../Button/CustomButton";

const SectionSix = () => {
  return (
    <SectionContainer>
      <ContentSection>
        <ImageContainer>
          <img src={setUp} alt="set up image" />
          <Square />
        </ImageContainer>
        <Content>
          <TitleContainer>
            <SectionTitle title="Reportes de Retenciones sin Límites" />
            <SectionSubtitle subtitle="¿Te has preguntado cómo podrías simplificar la tediosa tarea de gestionar retenciones e información de pagos en tus comprobantes fiscales? MiAdminXML tiene la respuesta que necesitas." />
          </TitleContainer>
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

const ContentSection = styled("div")(({}) => ({
  display: "flex",
  gap: 94,
  padding: "48px 0",
}));

const ImageContainer = styled("div")(({}) => ({
  position: "relative",
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
}));

const Content = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const TitleContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  textAlign: "center",
  maxWidth: 670,
  margin: "0 auto",
  textAlign: "start",
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

  button: {
    width: "100%",
  },
}));
