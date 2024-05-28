import { styled, Box } from "@mui/material";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import CustomButton from "../Button/CustomButton";
import CardItem from "./CardItem";
import RightArticle from "./RightArticle";

const SectionThree = () => {
  return (
    <Wrapper id="section-three">
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
                  title="Generación de PDF Masivos"
                  text="¿Necesitas convertir múltiples XML en PDF? MiAdminXML lo hace en cuestión de segundos, ahorrándote tiempo valioso."
                />
                <CardItem
                  title="Verifica Series"
                  text=" Evita errores en tus documentos fiscales al asegurarte de que las series sean coherentes y estén en orden."
                />
                <CardItem
                  title="Lector de Complementos"
                  text="Simplifica la gestión de los complementos asociados a tus facturas y ahorra tiempo valioso."
                />
              </CardContainer>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <CustomButton name="Obtenlo 30 días gratis" />
              </Box>
            </LeftColContent>
          </LeftCol>
          <RightCol>
            <RightArticle />
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                textAlign: "center",
                mt: 3,
              }}
            >
              <CustomButton name="Obtenlo 30 días gratis" />
            </Box>
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

const ContentSection = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 32,
  padding: "32px 0",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
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

const LeftColContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    gap: 16,
  },
}));

const LeftColContentTitle = styled("div")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",
  color: theme.palette.title.main,
  textAlign: "center",
}));

const CardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: 16,
  },
}));

const RightCol = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 308,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "none",
  },
}));
