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
      <ContentSection>
        <SectionTitle title="¿Estás listo para dar un gran paso en tu trabajo?" />
        <SectionSubtitle subtitle="MiAdminXML te desafía a evolucionar tu forma de trabajar en solo 30 días." />
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
  padding: "64px 0",
}));

const CardItemsWrapper = styled("div")(({}) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
}));
