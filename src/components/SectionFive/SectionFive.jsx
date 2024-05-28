import SectionContainer from "../SectionContainer/SectionContainer";
import { styled } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import Item from "./Item";
import { itemsInfo } from "./itemsInfo";

/**
 * Componente que representa la sección cinco de la página.
 * Muestra una lista de ítems con información sobre la conciliación de pagos simplificada.
 * @returns {JSX.Element} El componente SectionFive renderizado.
 */

const SectionFive = () => {
  return (
    <SectionContainer>
      <ContentSection id="section-five">
        <TitleContainer>
          <SectionTitle title=" Conciliación de Pagos Simplificada: ¡Un Clic y Listo!" />
          <SectionSubtitle subtitle=" Conozca las principales bondades que ofrece MiAdminXML" />
        </TitleContainer>
        <ItemsContainer>
          {itemsInfo.map((info, index) => (
            <Item number={index} title={info.title} text={info.text} />
          ))}
        </ItemsContainer>
      </ContentSection>
    </SectionContainer>
  );
};
export default SectionFive;

const ContentSection = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  padding: "48px 0",
}));

const TitleContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  textAlign: "center",
  maxWidth: 670,
  margin: "0 auto",
}));

const ItemsContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 32,

  [theme.breakpoints.down("sm")]: {
    gridTemplateRows: "repeat(6, 1fr)",
    gridTemplateColumns: "1fr",
    gap: 16,
  },
}));
