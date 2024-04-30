import {Box} from "@mui/material";

const ImageIntroduccion = () => {
  return (
    <Box
      sx = {{
        backgroundImage: `url(${require("../../../../assets/images/imagen-1.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "472px",
        height: "370px",
      }}>
    </Box>
  )
}

export default ImageIntroduccion;