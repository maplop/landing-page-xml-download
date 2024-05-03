import Watch from "./Icons/Watch";
import Gps from "./Icons/Gps";
import Phone from "./Icons/Phone";
import Email from "./Icons/Email";

export const renderIcon = (number) => {
  switch (number) {
    case 0:
      return <Watch />;
    case 1:
      return <Gps />;
    case 2:
      return <Phone />;
    case 3:
      return <Email />;
    default:
      return null;
  }
};
