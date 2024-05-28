import { styled } from "@mui/material";
import SectionContainer from "../SectionContainer/SectionContainer";
import Logo from "../Logo/Logo";
import Facebook from "./Icons/Facebook";
import Twitter from "./Icons/Twitter";
import Instagram from "./Icons/Instagram";
import Watch from "./Icons/Watch";
import Gps from "./Icons/Gps";
import Phone from "./Icons/Phone";
import Email from "./Icons/Email";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <SectionContainer>
        <FooterContent>
          <LeftCol>
            <Logo size={48} />
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat ut wisi enim ad minim
            </Description>
            <SocialMedia>
              <Facebook />
              <Twitter />
              <Instagram />
            </SocialMedia>
          </LeftCol>
          <RightCol>
            <ContactContainer>
              <ContactTitle>Atención al cliente</ContactTitle>
              <Contact>
                <ContactItem>
                  <Watch />
                  <ContactText>
                    Lunes a Viernes <br /> 9:00am - 2:00pm | 3:00pm - 6:00pm
                  </ContactText>
                </ContactItem>
                <ContactItem>
                  <Gps />
                  <ContactText>
                    Álamo Dorado 124 Col. Campestre Villas del Álamo C.P. 42184
                    Mineral de la Reforma, Hidalgo.
                  </ContactText>
                </ContactItem>
                <ContactItem>
                  <Phone />
                  <ContactText>+771 285 0074</ContactText>
                </ContactItem>
                <ContactItem>
                  <Email />
                  <ContactText>
                    ventas.computocontable@gmail.com
                    soporte.computocontable@gmail.com
                  </ContactText>
                </ContactItem>
              </Contact>
            </ContactContainer>
            <Separator />
            <TermsPoliciesContainer>
              <Link href="#">Aviso de Privacidad</Link>
              <Link href="#">Términos y Condiciones</Link>
            </TermsPoliciesContainer>
          </RightCol>
        </FooterContent>
      </SectionContainer>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled("footer")(({ theme }) => ({
  background: "linear-gradient(180deg, #E2F1FF 6.29%, #FFF 100%)",
  padding: "32px 0",
  marginTop: 64,
}));

const FooterContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 32,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const LeftCol = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 24,
  maxWidth: 210,

  [theme.breakpoints.down("sm")]: {
    maxWidth: "none",

    gap: 16,
  },
}));

const Description = styled("p")(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "20px",
  color: theme.palette.title.main,
  margin: 0,
}));

const SocialMedia = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
}));

const RightCol = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
}));

const ContactContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,

  [theme.breakpoints.down("sm")]: {
    gap: 16,
  },
}));

const ContactTitle = styled("p")(({ theme }) => ({
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "normal",
  color: theme.palette.title.main,
  margin: 0,
  textAlign: "center",
}));

const Contact = styled("div")(({ theme }) => ({
  display: "grid",
  gridAutoRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr",
  rowGap: 24,

  [theme.breakpoints.down("md")]: {
    gridAutoRows: "repeat(4, 1fr)",
    gridTemplateColumns: "1fr",
    rowGap: 16,
  },
}));

const Separator = styled("hr")(({ theme }) => ({
  width: "100%",
  background: theme.palette.primary.main,
  height: 2,
  borderStyle: "none",

  [theme.breakpoints.down("sm")]: {
    height: 1,
  },
}));

const TermsPoliciesContainer = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: 24,
}));

const Link = styled("a")(({ theme }) => ({
  fontSize: 14,
  fontWeight: 700,
  lineHeight: "20px",
  textDecorationLine: "underline",
  color: theme.palette.primary.main,
  cursor: "pointer",
}));

const ContactItem = styled("div")(({}) => ({
  display: "flex",
  gap: 16,

  svg: {
    minWidth: 24,
  },
}));

const ContactText = styled("p")(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "20px",
  color: theme.palette.black.main,
  margin: 0,
}));
