import { styled } from "@mui/material";

const CloseBtn = ({ handleIsMenuOpen }) => {
  return (
    <BtnContainer onClick={handleIsMenuOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0137 16.2342L20.096 24.3165C20.5249 24.7454 21.1066 24.9864 21.7131 24.9864C22.3196 24.9864 22.9013 24.7454 23.3302 24.3165C23.7591 23.8877 24 23.306 24 22.6995C24 22.0929 23.7591 21.5113 23.3302 21.0824L15.2448 13L23.3287 4.91767C23.5409 4.70531 23.7093 4.45323 23.8241 4.1758C23.9389 3.89838 23.998 3.60106 23.9979 3.30081C23.9979 3.00056 23.9387 2.70327 23.8237 2.4259C23.7087 2.14853 23.5403 1.89653 23.3279 1.68427C23.1155 1.47201 22.8635 1.30366 22.586 1.18883C22.3086 1.07399 22.0113 1.01492 21.711 1.01499C21.4108 1.01506 21.1135 1.07427 20.8361 1.18924C20.5588 1.3042 20.3068 1.47267 20.0945 1.68503L12.0137 9.76739L3.93131 1.68503C3.72053 1.46658 3.46834 1.2923 3.18948 1.17236C2.91061 1.05241 2.61065 0.989204 2.3071 0.986424C2.00355 0.983644 1.70248 1.04135 1.42147 1.15616C1.14045 1.27098 0.885119 1.44062 0.670364 1.65517C0.45561 1.86972 0.285735 2.12489 0.170652 2.4058C0.0555696 2.68671 -0.00241657 2.98772 7.71455e-05 3.29127C0.00257086 3.59483 0.0654943 3.89485 0.185177 4.17382C0.304859 4.4528 0.478903 4.70515 0.697153 4.91615L8.78256 13L0.698678 21.0839C0.480427 21.2949 0.306384 21.5472 0.186701 21.8262C0.067019 22.1052 0.00409486 22.4052 0.00160114 22.7088C-0.000892569 23.0123 0.0570936 23.3133 0.172176 23.5942C0.287259 23.8752 0.457134 24.1303 0.671888 24.3449C0.886643 24.5594 1.14198 24.7291 1.42299 24.8439C1.704 24.9587 2.00507 25.0164 2.30862 25.0136C2.61218 25.0108 2.91214 24.9476 3.191 24.8277C3.46986 24.7077 3.72205 24.5335 3.93284 24.315L12.0137 16.2342Z"
          fill="#FFFFFF"
        />
      </svg>
    </BtnContainer>
  );
};
export default CloseBtn;

const BtnContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 46,
  height: 46,
  backgroundColor: theme.palette.primary.main,
  margin: "0 auto",
  borderRadius: 6,
}));