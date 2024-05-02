import SectionContainer from "../SectionContainer/SectionContainer";
import Navbar from "../Navbar/Navbar";
import HeroContent from "./HeroContent";
import { styled } from "@mui/material";

const HeroSection = () => {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionContent>
          <Navbar />
          <HeroContent />
        </SectionContent>
      </SectionContainer>
    </Wrapper>
  );
};
export default HeroSection;

const Wrapper = styled("div")(({}) => ({
  background: "linear-gradient(180deg, #FFF 0%, #E2F1FF 100%)",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  paddingBottom: 60,
}));

const SectionContent = styled("div")(({}) => ({
  paddingTop: 24,
  paddingBottom: 32,
}));
