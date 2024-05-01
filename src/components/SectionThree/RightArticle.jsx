import { Box, styled } from "@mui/material";
import DocumentIcon from "./DocumentsIcon";
import CheckIcon from "./CheckIcon";

const RightArticle = () => {
  return (
    <ArticleContainer>
      <DocumentIcon />
      <Text>
        <span>Reportes Especializados:</span>
        <br />
        Generar informes detallados y personalizados es más fácil que nunca.
        Obtén una visión completa de tus transacciones y toma decisiones
        informadas con rapidez.
      </Text>
      <Text>
        ¡Gracias a nuestro filtro avanzado genera una infinidad de reportes!
        Estos son algunos ejemplos de lo que podrás hacer:
      </Text>
      <ListContainer>
        <ListItem>
          <CheckIcon />
          Reporte de Retenciones IVA e ISR
        </ListItem>
        <ListItem>
          <CheckIcon />
          Reporte de Método y Forma de Pago
        </ListItem>
        <ListItem>
          <CheckIcon />
          Reporte de Uso de CFDi
        </ListItem>
        <ListItem>
          <CheckIcon />
          <Box>
            Reporte de Comprobante (Ingreso, Egreso y Traslado) - Reporte de
            Estado SAT
          </Box>
        </ListItem>
      </ListContainer>
      <Text>
        Completa el formulario y comienza a aprovechar estas poderosas
        herramientas que revolucionarán tu trabajo contable. No dejes pasar esta
        oportunidad para optimizar tu gestión y aumentar tu productividad.
      </Text>
    </ArticleContainer>
  );
};
export default RightArticle;

const ArticleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
  padding: "48px 16px",
  borderRadius: 8,
  border: `1px solid ${theme.palette.primary.main}`,
  background: theme.palette.primary.light,
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "24px",
  color: theme.palette.text.main,
  margin: 0,

  span: {
    fontWeight: 700,
  },
}));

const ListContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
}));

const ListItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "normal",
  color: theme.palette.text.main,

  svg: {
    minWidth: 16,
  },
}));
