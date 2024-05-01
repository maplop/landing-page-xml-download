import SectionContainer from "../SectionContainer/SectionContainer";
import { styled, useTheme } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import CardPrice from "./CardPrice";
import { cardInfo } from "./cardInfo";

const SectionFour = () => {
  const theme = useTheme();

  return (
    <SectionContainer>
      <ContentSection>
        <TitleContainer>
          <SectionTitle title="Listado de precios de MiAdminXML" />
          <SectionSubtitle
            subtitle="Aquí, te invitamos a explorar las emocionantes opciones que ofrecemos con   tres licencias: Básica, Plus y Profesional.
Encuentra la licencia perfecta para ti y tu negocio, ¡comienza tu viaje hacia la eficiencia ahora mismo!"
          />
        </TitleContainer>
        <CardPriceContainer>
          {cardInfo.map((info, index) => (
            <CardPrice
              key={index}
              data={info}
              iconColor={
                index !== 1
                  ? theme.palette.primary.main
                  : theme.palette.white.main
              }
            />
          ))}
        </CardPriceContainer>
      </ContentSection>
    </SectionContainer>
  );
};
export default SectionFour;

const ContentSection = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: 24,
  padding: "48px 0",
}));

const TitleContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  maxWidth: 670,
  margin: "0 auto",
}));

const CardPriceContainer = styled("div")(({}) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 16,
}));
