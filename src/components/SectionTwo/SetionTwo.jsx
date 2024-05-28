import { Box, styled } from "@mui/material";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import downloadXMLImage from "../../assets/images/downloadXML.png";
import StarIcon from "./StarIcon";

const SectionTwo = () => {
  return (
    <Wrapper id="section-two">
      <Background />
      <SectionContainer>
        <ContentSection>
          <TitleContainer>
            <SectionTitle title="¿No te has convencido?" />
            <SectionSubtitle subtitle="Descubre el Poder de MiAdminXML: Tu Aliado en la Contabilidad" />
          </TitleContainer>
          <InfoContainer>
            <Info>
              <InfoTitle>
                Descarga Masiva de XML: <span>MiAdminXML Rompe Barreras</span>{" "}
                de Tiempo
              </InfoTitle>
              <InfoItem>
                <StarIcon />
                <Text>
                  Imagina liberarte de la tediosa tarea de descargar facturas
                  desde el portal del SAT. Con MiAdminXML, puedes aumentar tu
                  productividad y aprovechar al máximo tu tiempo. Permitiéndote
                  obtener miles de XML en cuestión de minutos.
                </Text>
              </InfoItem>
              <InfoItem>
                <StarIcon />
                <Text>
                  Mientras que otros programas te restringen a un solo RFC,
                  MiAdminXML te da la libertad de descargar los XML que
                  necesites, sin importar la cantidad de RFCs que manejes.
                </Text>
              </InfoItem>
            </Info>
            <ImgContainer>
              <img src={downloadXMLImage} alt="download-xml-image" />
            </ImgContainer>
          </InfoContainer>
        </ContentSection>
      </SectionContainer>
    </Wrapper>
  );
};
export default SectionTwo;

const Wrapper = styled("div")(({}) => ({
  position: "relative",
}));

const Background = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "50%",
  backgroundColor: theme.palette.secondary.light,
  zIndex: -1,
}));

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

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 46,

  [theme.breakpoints.down("md")]: {
    gap: 24,
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

const Info = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,

  [theme.breakpoints.down("sm")]: {
    gap: 16,
  },
}));

const InfoTitle = styled("h3")(({ theme }) => ({
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "24px",
  margin: 0,
  color: theme.palette.title.main,

  span: {
    color: theme.palette.primary.main,
  },
}));

const InfoItem = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 10,

  svg: {
    minWidth: 16,
  },
}));

const Text = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "24px",
  color: theme.palette.text.main,
}));

const ImgContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    img: {
      maxWidth: 360,
    },
  },
}));
