import Introduccion from "./Introduccion/Introduccion";
import {Box} from "@mui/material";
import BGImage from "../../assets/images/BG.jpg";

const boxStyle = {
  height: "696px",
  width: "1440px",
};

const SeccionIntroduccion = () => {
  return(
    <Box
      sx = {{
        ...boxStyle,
        background: `linear-gradient(180deg, #FFFFFF 0%, #E2F1FF 100%)`,
      }}>
      <Box
        sx = {{
          ...boxStyle,
          backgroundImage: `url(${BGImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}>
        <Introduccion />
      </Box>
    </Box>
  )
}

export default SeccionIntroduccion;

