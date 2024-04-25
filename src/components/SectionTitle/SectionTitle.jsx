import { Typography, styled } from "@mui/material";

const SectionTitle = ({ title }) => {
  return <Title variant="h2">{title}</Title>;
};
export default SectionTitle;

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 600,
  color: theme.palette.title.main,
}));
