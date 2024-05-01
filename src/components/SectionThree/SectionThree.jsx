import { styled, Box } from "@mui/material";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import CustomButton from "../Button/CustomButton";
import CardItem from "./CardItem";
import RightArticle from "./RightArticle";

const SectionThree = () => {
  return (
    <Wrapper>
      <SectionContainer>
        <ContentSection>
          <LeftCol>
            <TitleContainer>
              <SectionTitle title="Documentos Fiscales en Orden: Cumple tus obligaciones sin Complicaciones" />
              <SectionSubtitle subtitle="Descubre el Poder de MiAdminXML: Tu Aliado en la Contabilidad" />
            </TitleContainer>
            <LeftColContent>
              <LeftColContentTitle>
                El Módulo de Administración de XML 4.0 de MiAdminXML te ofrece
                un conjunto de herramientas excepcionales que te permitirán
                llevar tu trabajo al siguiente nivel
              </LeftColContentTitle>
              <CardContainer>
                <CardItem
                  title="Validación de Estado SAT"
                  text="Deja atrás las preocupaciones sobre la validez de tus comprobantes fiscales. Nuestra herramienta te permite verificar el estado SAT de manera sencilla y precisa."
                />
                <CardItem
                  title="Validación de Estado SAT"
                  text="Deja atrás las preocupaciones sobre la validez de tus comprobantes fiscales. Nuestra herramienta te permite verificar el estado SAT de manera sencilla y precisa."
                />
                <CardItem
                  title="Validación de Estado SAT"
                  text="Deja atrás las preocupaciones sobre la validez de tus comprobantes fiscales. Nuestra herramienta te permite verificar el estado SAT de manera sencilla y precisa."
                />
                <CardItem
                  title="Validación de Estado SAT"
                  text="Deja atrás las preocupaciones sobre la validez de tus comprobantes fiscales. Nuestra herramienta te permite verificar el estado SAT de manera sencilla y precisa."
                />
              </CardContainer>
              <Box>
                <CustomButton name="Obtenlo 30 días gratis" />
              </Box>
            </LeftColContent>
          </LeftCol>
          <RightCol>
            <RightArticle />
          </RightCol>
        </ContentSection>
      </SectionContainer>
    </Wrapper>
  );
};
export default SectionThree;

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: "32px 0",
}));

const ContentSection = styled("div")(({}) => ({
  display: "flex",
  gap: 32,
  padding: "32px 0",
}));

const LeftCol = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
}));

const TitleContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  maxWidth: 502,
  margin: "0 auto",
  textAlign: "center",
}));

const LeftColContent = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));

const LeftColContentTitle = styled("div")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",
  color: theme.palette.title.main,
  textAlign: "center",
}));

const CardContainer = styled("div")(({}) => ({
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,
}));

const RightCol = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 308,
}));
