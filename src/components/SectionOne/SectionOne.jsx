import { styled } from "@mui/material";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import CardItem from "./CardItem";
import icon1 from "../../assets/images/s1-icon1.png";
import icon2 from "../../assets/images/s1-icon2.png";
import icon3 from "../../assets/images/s1-icon3.png";

const SectionOne = () => {
  return (
    <SectionContainer>
      <ContentSection id="section-one">
        <TitleContainer>
          <SectionTitle title="¿Estás listo para dar un gran paso en tu trabajo?" />
          <SectionSubtitle subtitle="MiAdminXML te desafía a evolucionar tu forma de trabajar en solo 30 días." />
        </TitleContainer>
        <CardItemsWrapper>
          <CardItem
            icon={icon1}
            text="Con nuestra poderosa herramienta, podrás descargar masivamente tus XML emitidos y recibidos directamente desde el portal del SAT."
          />
          <CardItem
            icon={icon2}
            text="¡Pero eso es solo el comienzo! También podrás administrar y controlar tu información de manera eficiente."
          />
          <CardItem
            icon={icon3}
            text="¡Y no te olvides de los reportes en Excel que puedes generar con un clic!."
          />
        </CardItemsWrapper>
      </ContentSection>
    </SectionContainer>
  );
};
export default SectionOne;

const ContentSection = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  textAlign: "center",
  padding: "48px 0",
}));

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  textAlign: "center",
  maxWidth: 620,
  margin: "0 auto",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    maxWidth: 500,
  },
}));

const CardItemsWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",

  [theme.breakpoints.down("sm")]: {
    gap: 8,
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr",
  },
}));
