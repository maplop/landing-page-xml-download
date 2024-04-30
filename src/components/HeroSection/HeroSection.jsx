import SectionContainer from "../SectionContainer/SectionContainer";
import Navbar from "../Navbar/Navbar";
import HeroContent from "./HeroContent";
import { styled } from "@mui/material";

const HeroSection = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <Navbar />
        <HeroContent />
      </SectionContent>
    </SectionContainer>
  );
};
export default HeroSection;

const SectionContent = styled("div")(({}) => ({
  paddingTop: 24,
  paddingBottom: 32,
}));
