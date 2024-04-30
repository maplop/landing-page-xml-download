import React from 'react';
import { makeStyles } from '@material-ui/core';
import theme from '../../../styles/theme';
import downloadLogo from '../../../assets/images/downloadLogo.png';
import AdmitrationLogo from '../../../assets/images/AdmitrationLogo.png';
import ReportLogo from '../../../assets/images/ReportLogo.png'
import BenefitItem from "./BenefitItem/BenefitItem";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '960px',
    height: '218px',
    gap: '0px',
    opacity: 1
  }
});

const Benefist = () => {
  const classes = useStyles(theme);

  const benfits = [
    { texto: 'Con nuestra poderosa herramienta, podrás descargar masivamente tus XML emitidos y recibidos directamente desde el portal del SAT.', imageSource: downloadLogo },
    { texto: '¡Pero eso es solo el comienzo! También podrás administrar y controlar tu información de manera eficiente.', imageSource: AdmitrationLogo },
    { texto: '¡Y no te olvides de los reportes en Excel que puedes generar con un clic!.', imageSource: ReportLogo },
  ];

  return (
    <div className={classes.root}>
      {benfits.map(({ texto, imageSource }) => (
        <BenefitItem key={texto} texto={texto} imageSource={imageSource} />
      ))}
    </div>
  );
};

export default Benefist;