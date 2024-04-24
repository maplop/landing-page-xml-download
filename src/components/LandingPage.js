import React from "react";
import { Box, AppBar, Toolbar, Typography, Container, CardContent, Card } from "@mui/material";


function LandingPage() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Proyecto</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Sistema de Descarga Masiva de XML
            </Typography>
            <Typography variant="body2" component="p">
              Este Proyecto: Descarga, Administra y Controla de Forma masiva tus
              XML Emitidos y Recibidos directamente desde el portal del SAT.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
export default LandingPage;
