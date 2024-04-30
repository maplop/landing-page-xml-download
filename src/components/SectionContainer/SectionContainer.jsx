import { Container, styled } from "@mui/material";

const SectionContainer = ({ children }) => {
  return <SectionWrapper maxWidth="md">{children}</SectionWrapper>;
};
export default SectionContainer;

const SectionWrapper = styled(Container)(({}) => ({
  "&.MuiContainer-root": {
    padding: 0,
  },
}));
